[@poppinss/fancy-logs](../README.md) › ["src/Logger"](../modules/_src_logger_.md) › [Logger](_src_logger_.logger.md)

# Class: Logger

Logger exposes the API to print fancy logs to the console.

## Hierarchy

* **Logger**

## Index

### Constructors

* [constructor](_src_logger_.logger.md#constructor)

### Properties

* [logs](_src_logger_.logger.md#logs)

### Methods

* [$log](_src_logger_.logger.md#protected-$log)
* [$printMessage](_src_logger_.logger.md#protected-$printmessage)
* [compile](_src_logger_.logger.md#compile)
* [complete](_src_logger_.logger.md#complete)
* [create](_src_logger_.logger.md#create)
* [delete](_src_logger_.logger.md#delete)
* [error](_src_logger_.logger.md#error)
* [fatal](_src_logger_.logger.md#fatal)
* [info](_src_logger_.logger.md#info)
* [log](_src_logger_.logger.md#log)
* [pauseLogger](_src_logger_.logger.md#pauselogger)
* [pending](_src_logger_.logger.md#pending)
* [resumeLogger](_src_logger_.logger.md#resumelogger)
* [skip](_src_logger_.logger.md#skip)
* [start](_src_logger_.logger.md#start)
* [stop](_src_logger_.logger.md#stop)
* [success](_src_logger_.logger.md#success)
* [update](_src_logger_.logger.md#update)
* [warn](_src_logger_.logger.md#warn)
* [watch](_src_logger_.logger.md#watch)

### Object literals

* [actions](_src_logger_.logger.md#actions)

## Constructors

###  constructor

\+ **new Logger**(`_baseOptions?`: Partial‹Exclude‹[MessageNode](../modules/_src_contracts_.md#messagenode), "message"›› & object): *[Logger](_src_logger_.logger.md)*

**Parameters:**

Name | Type |
------ | ------ |
`_baseOptions?` | Partial‹Exclude‹[MessageNode](../modules/_src_contracts_.md#messagenode), "message"›› & object |

**Returns:** *[Logger](_src_logger_.logger.md)*

## Properties

###  logs

• **logs**: *string[]* =  []

An array of logs collected only when `fake` is set
to true

## Methods

### `Protected` $log

▸ **$log**(`logMethod`: string, `message`: string, `args`: any[]): *void*

Invokes `console[logMethod]`, gives opportunity to overwrite the
method during extend

**Parameters:**

Name | Type |
------ | ------ |
`logMethod` | string |
`message` | string |
`args` | any[] |

**Returns:** *void*

___

### `Protected` $printMessage

▸ **$printMessage**(`message`: [DeferredMessageNode](../modules/_src_contracts_.md#deferredmessagenode)): *undefined | string*

Prints message node to the console

**Parameters:**

Name | Type |
------ | ------ |
`message` | [DeferredMessageNode](../modules/_src_contracts_.md#deferredmessagenode) |

**Returns:** *undefined | string*

___

###  compile

▸ **compile**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print compile message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  complete

▸ **complete**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print complete message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  create

▸ **create**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print create message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  delete

▸ **delete**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print delete message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  error

▸ **error**(`message`: string | Error | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print error message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; Error &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  fatal

▸ **fatal**(`message`: string | Error | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print fatal message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; Error &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  info

▸ **info**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print info message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  log

▸ **log**(`name`: keyof ActionsList, `messageNode`: string | Error | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Log message for a given action

**Parameters:**

Name | Type |
------ | ------ |
`name` | keyof ActionsList |
`messageNode` | string &#124; Error &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  pauseLogger

▸ **pauseLogger**(): *void*

Pause the logger and collect logs in memory

**Returns:** *void*

___

###  pending

▸ **pending**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print pending message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  resumeLogger

▸ **resumeLogger**(`filterFn?`: undefined | function): *void*

Resume logger and pass a function to decide whether or not
to print the log

**Parameters:**

Name | Type |
------ | ------ |
`filterFn?` | undefined &#124; function |

**Returns:** *void*

___

###  skip

▸ **skip**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print skip message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  start

▸ **start**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print start message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  stop

▸ **stop**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print stop message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  success

▸ **success**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print success message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  update

▸ **update**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print update message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  warn

▸ **warn**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print skip message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

___

###  watch

▸ **watch**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *undefined | string*

Print watch message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *undefined | string*

## Object literals

###  actions

### ▪ **actions**: *object*

List of actions that can be logged using the logger

▪ **compile**: *object*

* **badge**: *string* =  figures.pointer

* **color**: *"yellow"* = "yellow"

* **logLevel**: *"info"* = "info"

▪ **complete**: *object*

* **badge**: *string* =  figures.checkboxOn

* **color**: *"cyan"* = "cyan"

* **logLevel**: *"info"* = "info"

▪ **create**: *object*

* **badge**: *string* =  figures.tick

* **color**: *"green"* = "green"

* **logLevel**: *"info"* = "info"

▪ **delete**: *object*

* **badge**: *string* =  figures.tick

* **color**: *"blue"* = "blue"

* **logLevel**: *"info"* = "info"

▪ **error**: *object*

* **badge**: *string* =  figures.cross

* **color**: *"red"* = "red"

* **logLevel**: *"error"* = "error"

▪ **fatal**: *object*

* **badge**: *string* =  figures.cross

* **color**: *"red"* = "red"

* **logLevel**: *"error"* = "error"

▪ **info**: *object*

* **badge**: *string* =  figures.info

* **color**: *"blue"* = "blue"

* **logLevel**: *"info"* = "info"

▪ **pending**: *object*

* **badge**: *string* =  figures.checkboxOff

* **color**: *"magenta"* = "magenta"

* **logLevel**: *"info"* = "info"

▪ **skip**: *object*

* **badge**: *string* =  figures.bullet

* **color**: *"magenta"* = "magenta"

* **logLevel**: *"info"* = "info"

▪ **start**: *object*

* **badge**: *string* =  figures.play

* **color**: *"green"* = "green"

* **logLevel**: *"info"* = "info"

▪ **stop**: *object*

* **badge**: *string* =  figures.squareSmallFilled

* **color**: *"magenta"* = "magenta"

* **logLevel**: *"info"* = "info"

▪ **success**: *object*

* **badge**: *string* =  figures.tick

* **color**: *"green"* = "green"

* **logLevel**: *"info"* = "info"

▪ **update**: *object*

* **badge**: *string* =  figures.tick

* **color**: *"yellow"* = "yellow"

* **logLevel**: *"info"* = "info"

▪ **warn**: *object*

* **badge**: *string* =  figures.warning

* **color**: *"yellow"* = "yellow"

* **logLevel**: *"info"* = "info"

▪ **watch**: *object*

* **badge**: *string* =  figures.ellipsis

* **color**: *"yellow"* = "yellow"

* **logLevel**: *"info"* = "info"
