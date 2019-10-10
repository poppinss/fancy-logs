/*
* @poppinss/fancy-logs
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import figures from 'figures'
import stringWidth from 'string-width'
import { Colors } from '@poppinss/colors'
import { ActionsList, MessageNode } from './contracts'

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
  }

  private _colors = new Colors()

  /**
   * Length of the biggest label to keep all log messages
   * justified
   */
  private _biggestLabel = Math.max(...Object.keys(this.actions).map((action) => {
    return stringWidth(this._formatAction(action as keyof ActionsList, false))
  }))

  /**
   * Formats an action with colors, icons and whitespace to keep it
   * justifieds
   */
  private _formatAction (
    name: keyof ActionsList,
    addWhitespace: boolean,
    icon: boolean = true,
  ) {
    const action = this.actions[name]
    const badge = this._colors[action.color](action.badge) as string
    const label = this._colors.underline()[action.color](name) as string

    const message = icon
      ? `${badge}  ${label}`
      : `${new Array(stringWidth(badge) + 1).join(' ')}  ${label}`

    if (!addWhitespace) {
      return message
    }

    const whitespace = new Array((this._biggestLabel - stringWidth(message)) + 2).join(' ')
    return `${message}${whitespace}`
  }

  /**
   * Formats error message
   */
  private _formatStack (name: keyof ActionsList, message: Error | MessageNode) {
    if (name !== 'fatal' || !message['stack']) {
      return message.message
    }

    const stack = message['stack'].split('\n')
    return `${stack.shift()}\n${stack.map((line) => {
      return `${this._colors.dim(line)}`
    }).join('\n')}`
  }

  /**
   * Log message for a given action
   */
  public log (name: keyof ActionsList, message: string | Error | MessageNode, ...args: string[]) {
    /**
     * Normalizing message node
     */
    const normalizedmessage = typeof (message) === 'string'
      ? { message, icon: true }
      : message

    const action = this.actions[name]
    const formattedAction = this._formatAction(name, true, normalizedmessage['icon'])
    const method = action.logLevel === 'error' ? 'error' : 'log'

    let prefix: string = ''
    const formattedMessage = this._formatStack(name, normalizedmessage)

    if (message['prefix']) {
      prefix = this._colors.dim(`${message['prefix']} `)
    }

    if (message['suffix']) {
      prefix = this._colors.dim().yellow(`${message['suffix']} `)
    }

    console[method](`${prefix}${formattedAction}${formattedMessage}`, ...args)
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
}
