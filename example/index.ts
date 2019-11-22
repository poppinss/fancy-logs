import fancyLogger, { Logger } from '../index'

fancyLogger.success('Operation successful')
fancyLogger.info('Hello from L59')
fancyLogger.pending('Write release notes for %s', '1.2.0')
fancyLogger.fatal(new Error('Unable to acquire lock'))
fancyLogger.watch('Recursively watching build directory...')
fancyLogger.warn('fire in the hole')
fancyLogger.complete({
  prefix: '[task]',
  message: 'Fix issue #59',
})

fancyLogger.success({ message: 'Operation successful', icon: false })
fancyLogger.compile({ message: 'Operation successful' })
fancyLogger.info({ message: 'installing dependencies', suffix: '(npm)' })
fancyLogger.info({ message: 'installing dependencies', color: false, icon: false })
fancyLogger.skip({ message: 'creating new file' })
fancyLogger.warn({ message: 'fire in the hole', icon: false })

fancyLogger.fatal({ message: new Error('Unable to acquire lock'), icon: false })

console.log('\n======= CUSTOM LOGGER ==========\n')

const customLogger = new Logger({ underline: false, icon: false, color: false })
customLogger.success('Operation successful')
customLogger.info('Hello from L59')
customLogger.pending('Write release notes for %s', '1.2.0')
customLogger.fatal(new Error('Unable to acquire lock'))
customLogger.watch('Recursively watching build directory...')
customLogger.complete({
  prefix: '[task]',
  message: 'Fix issue #59',
})

customLogger.success({ message: 'Operation successful', icon: true })
customLogger.compile({ message: 'Operation successful' })
customLogger.info({ message: 'installing dependencies', suffix: '(npm)' })
customLogger.info({ message: 'installing dependencies', color: true, icon: true })

customLogger.fatal({ message: new Error('Unable to acquire lock'), icon: true })
customLogger.skip({ message: 'creating new file' })

console.log('\n======= PAUSING LOGGER TO AVOID DUPLICATES ==========\n')

const duplicates: Set<any> = new Set()

fancyLogger.pauseLogger()
fancyLogger.success('Operation successful')
fancyLogger.info('Hello from L59')
fancyLogger.success('Operation successful')
fancyLogger.pending('Write release notes for %s', '1.2.0')
fancyLogger.fatal(new Error('Unable to acquire lock'))
fancyLogger.watch('Recursively watching build directory...')
fancyLogger.fatal(new Error('Unable to acquire lock'))
fancyLogger.info({ message: 'installing dependencies', color: false, icon: false })
fancyLogger.info({ message: 'installing dependencies', color: false, icon: false })

fancyLogger.resumeLogger((log) => {
  if (log.action === 'fatal') {
    return true
  }

  if (duplicates.has(log.message)) {
    return false
  }

  duplicates.add(log.message)
  return true
})
