/*
* @poppinss/fancy-logs
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import figures from 'figures'
import { format } from 'util'
import stringWidth from 'string-width'
import { serializeError } from 'serialize-error'
import { Colors, FakeColors } from '@poppinss/colors'
import { ActionsList, MessageNode, DeferredMessageNode } from './contracts'

/**
 * Logger exposes the API to print fancy logs to the console.
 */
export class Logger {
  /**
   * List of actions that can be logged using the logger
   */
  public actions: ActionsList = {
    success: {
      color: 'green',
      badge: figures.tick,
      logLevel: 'info',
    },
    fatal: {
      color: 'red',
      badge: figures.cross,
      logLevel: 'error',
    },
    error: {
      color: 'red',
      badge: figures.cross,
      logLevel: 'error',
    },
    info: {
      color: 'blue',
      badge: figures.info,
      logLevel: 'info',
    },
    complete: {
      color: 'cyan',
      badge: figures.checkboxOn,
      logLevel: 'info',
    },
    pending: {
      color: 'magenta',
      badge: figures.checkboxOff,
      logLevel: 'info',
    },
    create: {
      color: 'green',
      badge: figures.tick,
      logLevel: 'info',
    },
    update: {
      color: 'yellow',
      badge: figures.tick,
      logLevel: 'info',
    },
    delete: {
      color: 'blue',
      badge: figures.tick,
      logLevel: 'info',
    },
    watch: {
      color: 'yellow',
      badge: figures.ellipsis,
      logLevel: 'info',
    },
    start: {
      color: 'green',
      badge: figures.play,
      logLevel: 'info',
    },
    stop: {
      color: 'magenta',
      badge: figures.squareSmallFilled,
      logLevel: 'info',
    },
    compile: {
      color: 'yellow',
      badge: figures.pointer,
      logLevel: 'info',
    },
    skip: {
      color: 'magenta',
      badge: figures.bullet,
      logLevel: 'info',
    },
    warn: {
      color: 'yellow',
      badge: figures.warning,
      logLevel: 'info',
    },
  }

  /**
   * Reference to colors, fake colors are used when `fake` is
   * set to true
   */
  private colors: Colors | FakeColors

  /**
   * Array of logs collected when logger was paused. Helps in
   * collecting logs and then filtering them during resume.
   */
  private deferredLogs: DeferredMessageNode[] = []

  /**
   * Is logger paused from printing logs
   */
  private isPaused: boolean = false

  /**
   * Length of the biggest label to keep all log messages
   * justified
   */
  private biggestLabel: number

  /**
   * An array of logs collected only when `fake` is set
   * to true
   */
  public logs: string[] = []

  constructor (private baseOptions?: Partial<Exclude<MessageNode, 'message'>> & { fake?: boolean }) {
    this.configure()
    this.computeBiggestLabel()
  }

  /**
   * Configures the logger
   */
  private configure () {
    this.baseOptions = Object.assign({
      color: true,
      icon: true,
      underline: true,
      fake: false,
    }, this.baseOptions)

    this.colors = this.baseOptions!.fake ? new FakeColors() : new Colors()
  }

  /**
   * Computes the length of the biggest label including it's icon. Required
   * to justify content
   */
  private computeBiggestLabel () {
    this.biggestLabel = Math.max(...Object.keys(this.actions).map((name: keyof ActionsList) => {
      const action = this.actions[name]
      const badge = this.colors[action.color](action.badge)
      const label = this.colors[action.color]().underline(name)
      return stringWidth(`${badge}  ${label}`)
    }))
  }

  /**
   * Returns the base message node
   */
  private normalizeMessage (message: string | MessageNode): MessageNode {
    /**
     * Message itself is an error object, so we add icon, color and underline
     * to props to it
     */
    if (message['stack']) {
      const serializedMessage = serializeError(message)
      serializedMessage['icon'] = this.baseOptions!.icon
      serializedMessage['color'] = this.baseOptions!.color
      serializedMessage['underline'] = this.baseOptions!.underline
      return serializedMessage as MessageNode
    }

    /**
     * Message is a string, so we use the defaults + the message text
     */
    if (typeof (message) === 'string') {
      return Object.assign({}, this.baseOptions, { message })
    }

    /**
     * Message is an object, but it's message is an error object. In that
     * case, we merge the props of message with the defaults and then
     * copy them over the message.message error object. CONFUSED?
     */
    if (message.message['stack']) {
      const serializedMessage = serializeError(message.message)
      const options = Object.assign({}, this.baseOptions, message)
      serializedMessage['icon'] = options.icon
      serializedMessage['color'] = options.color
      serializedMessage['underline'] = options.underline
      return serializedMessage as MessageNode
    }

    return Object.assign({}, this.baseOptions, message)
  }

  /**
   * Returns whitespace for a given length
   */
  private getWhitespace (length: number): string {
    return this.baseOptions!.fake ? ' ' : new Array(length + 1).join(' ')
  }

  /**
   * Returns the icon for a given action type
   */
  private getIcon (name: keyof ActionsList, messageNode: Partial<MessageNode>): string {
    const action = this.actions[name]
    if (this.baseOptions!.fake) {
      return ''
    }

    if (!messageNode.icon) {
      return this.getWhitespace(3)
    }

    if (!messageNode.color) {
      return `${action.badge}${this.getWhitespace(2)}`
    }

    return `${this.colors[action.color](action.badge)}${this.getWhitespace(2)}`
  }

  /**
   * Returns the label for a given action type
   */
  private getLabel (name: keyof ActionsList, messageNode: Partial<MessageNode>): string {
    const action = this.actions[name]

    if (messageNode.color && messageNode.underline) {
      return this.colors.underline()[action.color](name) as string
    }

    if (messageNode.color) {
      return this.colors[action.color](name) as string
    }

    return name
  }

  /**
   * Returns the prefix for the message
   */
  private getPrefix (messageNode: Partial<MessageNode>): string {
    if (messageNode.prefix) {
      return `${this.colors.dim(messageNode.prefix)}${this.getWhitespace(1)}`
    }
    return ''
  }

  /**
   * Returns the suffix for the message
   */
  private getSuffix (messageNode: Partial<MessageNode>): string {
    if (messageNode.suffix) {
      return `${this.getWhitespace(1)}${this.colors.dim().yellow(messageNode.suffix)}`
    }
    return ''
  }

  /**
   * Formats error message
   */
  private formatStack (name: keyof ActionsList, message: Error | MessageNode) {
    if (name !== 'fatal' || !message['stack']) {
      return message.message
    }

    const stack = message['stack'].split('\n')
    return `${stack.shift()}\n${stack.map((line) => {
      return `${this.colors.dim(line)}`
    }).join('\n')}`
  }

  /**
   * Invokes `console[logMethod]`, gives opportunity to overwrite the
   * method during extend
   */
  protected $log (logMethod: string, message: string, args: any[]) {
    console[logMethod](message, ...args)
  }

  /**
   * Prints message node to the console
   */
  protected $printMessage (message: DeferredMessageNode) {
    const prefix = this.getPrefix(message)
    const icon = this.getIcon(message.action, message)
    const label = this.getLabel(message.action, message)
    const formattedMessage = this.formatStack(message.action, message)
    const suffix = this.getSuffix(message)

    if (this.baseOptions!.fake) {
      const log = format(`${prefix}${icon}${label} ${formattedMessage}${suffix}`, ...message.args)
      this.logs.push(log)
      return log
    }

    const method = this.actions[message.action].logLevel === 'error' ? 'error' : 'log'

    /**
     * Justification whitespace is required justify the text after the
     * icon and label
     */
    const justifyWhitespace = this.getWhitespace((this.biggestLabel - stringWidth(`${icon}${label}`)) + 2)
    this.$log(
      method,
      `${prefix}${icon}${label}${justifyWhitespace}${formattedMessage}${suffix}`,
      message.args,
    )
  }

  /**
   * Log message for a given action
   */
  public log (name: keyof ActionsList, messageNode: string | Error | MessageNode, ...args: string[]) {
    const normalizedMessage = this.normalizeMessage(messageNode)
    const message = Object.assign({ action: name, args }, normalizedMessage)

    if (this.isPaused) {
      this.deferredLogs.push(message)
      return
    }

    return this.$printMessage(message)
  }

  /**
   * Print success message
   */
  public success (message: string | MessageNode, ...args: string[]) {
    return this.log('success', message, ...args)
  }

  /**
   * Print error message
   */
  public error (message: string | Error | MessageNode, ...args: string[]) {
    return this.log('error', message, ...args)
  }

  /**
   * Print fatal message
   */
  public fatal (message: string | Error | MessageNode, ...args: string[]) {
    return this.log('fatal', message, ...args)
  }

  /**
   * Print info message
   */
  public info (message: string | MessageNode, ...args: string[]) {
    return this.log('info', message, ...args)
  }

  /**
   * Print complete message
   */
  public complete (message: string | MessageNode, ...args: string[]) {
    return this.log('complete', message, ...args)
  }

  /**
   * Print pending message
   */
  public pending (message: string | MessageNode, ...args: string[]) {
    return this.log('pending', message, ...args)
  }

  /**
   * Print create message
   */
  public create (message: string | MessageNode, ...args: string[]) {
    return this.log('create', message, ...args)
  }

  /**
   * Print update message
   */
  public update (message: string | MessageNode, ...args: string[]) {
    return this.log('update', message, ...args)
  }

  /**
   * Print delete message
   */
  public delete (message: string | MessageNode, ...args: string[]) {
    return this.log('delete', message, ...args)
  }

  /**
   * Print watch message
   */
  public watch (message: string | MessageNode, ...args: string[]) {
    return this.log('watch', message, ...args)
  }

  /**
   * Print start message
   */
  public start (message: string | MessageNode, ...args: string[]) {
    return this.log('start', message, ...args)
  }

  /**
   * Print stop message
   */
  public stop (message: string | MessageNode, ...args: string[]) {
    return this.log('stop', message, ...args)
  }

  /**
   * Print compile message
   */
  public compile (message: string | MessageNode, ...args: string[]) {
    return this.log('compile', message, ...args)
  }

  /**
   * Print skip message
   */
  public skip (message: string | MessageNode, ...args: string[]) {
    return this.log('skip', message, ...args)
  }

  /**
   * Print skip message
   */
  public warn (message: string | MessageNode, ...args: string[]) {
    return this.log('warn', message, ...args)
  }

  /**
   * Pause the logger and collect logs in memory
   */
  public pauseLogger () {
    this.isPaused = true
  }

  /**
   * Resume logger and pass a function to decide whether or not
   * to print the log
   */
  public resumeLogger (filterFn?: (message: DeferredMessageNode) => boolean) {
    this.isPaused = false
    this.deferredLogs.forEach((log) => {
      if (typeof (filterFn) !== 'function' || filterFn(log)) {
        this.$printMessage(log)
      }
    })
  }
}
