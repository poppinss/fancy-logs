import fancyLogger from '../index'

fancyLogger.success('Operation successful')
fancyLogger.info('Hello from L59')
fancyLogger.pending('Write release notes for %s', '1.2.0')
fancyLogger.fatal(new Error('Unable to acquire lock'))
fancyLogger.watch('Recursively watching build directory...')
fancyLogger.complete({
  prefix: '[task]',
  message: 'Fix issue #59',
})

fancyLogger.success({ message: 'Operation successful', icon: false })
fancyLogger.compile({ message: 'Operation successful' })
