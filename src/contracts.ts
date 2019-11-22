/*
* @poppinss/fancy-logs
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { Colors } from '@poppinss/colors/build/src/Base'

/**
 * Shape of the acceptable message node
 */
export type MessageNode = {
  prefix?: string,
  suffix?: string,
  icon?: boolean,
  color?: boolean,
  underline?: boolean,
  message: string | Error,
}

export type DeferredMessageNode = { action: keyof ActionsList, args: any[] } & MessageNode

/**
 * Loggable actions
 */
export type ActionNames =
  'success' |
  'fatal' |
  'error' |
  'warn' |
  'info' |
  'complete' |
  'pending' |
  'create' |
  'update' |
  'delete' |
  'watch' |
  'start' |
  'stop' |
  'compile' |
  'skip'

/**
 * Action definition
 */
export type Action = {
  color: keyof Colors,
  badge: string,
  logLevel: 'info' | 'error',
}

/**
 * Shape of list of actions
 */
export type ActionsList = { [action in ActionNames]: Action }
