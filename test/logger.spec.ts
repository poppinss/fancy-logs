/*
 * @poppinss/fancy-logs
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import test from 'japa'
import { Logger } from '../src/Logger'

test.group('Logger', () => {
  test('log message', (assert) => {
    const logger = new Logger({ fake: true })
    assert.equal(logger.success('Hello world'), 'underline(green(success)) Hello world')
  })

  test('log message with additional data', (assert) => {
    const logger = new Logger({ fake: true })
    assert.equal(
      logger.success('Hello %s', 'world'),
      'underline(green(success)) Hello world',
    )
  })

  test('log message without color', (assert) => {
    const logger = new Logger({ fake: true })
    assert.equal(
      logger.success({ message: 'Hello world', color: false }),
      'success Hello world',
    )
  })

  test('log message without underline', (assert) => {
    const logger = new Logger({ fake: true })
    assert.equal(
      logger.success({ message: 'Hello world', underline: false }),
      'green(success) Hello world',
    )
  })

  test('log message with suffix', (assert) => {
    const logger = new Logger({ fake: true })
    assert.equal(
      logger.success({ message: 'Hello world', suffix: 'npm' }),
      'underline(green(success)) Hello world dim(yellow(npm))',
    )
  })

  test('log message with prefix', (assert) => {
    const logger = new Logger({ fake: true })
    assert.equal(
      logger.success({ message: 'Hello world', prefix: 'bash' }),
      'dim(bash) underline(green(success)) Hello world',
    )
  })
})
