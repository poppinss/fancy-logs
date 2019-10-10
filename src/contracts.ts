/*
* @poppinss/fancy-logs
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { Colors } from '@poppinss/colors/build/src/Base'

export type MessageNode = {
  prefix?: string,
  suffix?: string,
  icon?: boolean,
  color?: boolean,
  underline?: boolean,
  message: string | Error,
}

export type ActionNames =
  'success' |
  'fatal' |
  'error' |
  'info' |
  'complete' |
  'pending' |
  'create' |
  'update' |
  'delete' |
  'watch' |
  'start' |
  'stop' |
  'compile'

export type Action = {
  color: keyof Colors,
  badge: string,
  logLevel: 'info' | 'error',
}

export type ActionsList = { [action in ActionNames]: Action }
