[@poppinss/fancy-logs](../README.md) › ["src/Logger"](../modules/_src_logger_.md) › [Logger](_src_logger_.logger.md)

# Class: Logger

Logger exposes the API to print fancy logs to the console.

## Hierarchy

* **Logger**

## Index

### Methods

* [complete](_src_logger_.logger.md#complete)
* [create](_src_logger_.logger.md#create)
* [delete](_src_logger_.logger.md#delete)
* [error](_src_logger_.logger.md#error)
* [fatal](_src_logger_.logger.md#fatal)
* [info](_src_logger_.logger.md#info)
* [log](_src_logger_.logger.md#log)
* [pending](_src_logger_.logger.md#pending)
* [start](_src_logger_.logger.md#start)
* [stop](_src_logger_.logger.md#stop)
* [success](_src_logger_.logger.md#success)
* [update](_src_logger_.logger.md#update)
* [watch](_src_logger_.logger.md#watch)

### Object literals

* [actions](_src_logger_.logger.md#actions)

## Methods

###  complete

▸ **complete**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *void*

Print complete message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *void*

___

###  create

▸ **create**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *void*

Print create message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *void*

___

###  delete

▸ **delete**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *void*

Print delete message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *void*

___

###  error

▸ **error**(`message`: string | Error | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *void*

Print error message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; Error &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *void*

___

###  fatal

▸ **fatal**(`message`: string | Error | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *void*

Print fatal message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; Error &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *void*

___

###  info

▸ **info**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *void*

Print info message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *void*

___

###  log

▸ **log**(`name`: keyof ActionsList, `message`: string | Error | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *void*

Log message for a given action

**Parameters:**

Name | Type |
------ | ------ |
`name` | keyof ActionsList |
`message` | string &#124; Error &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *void*

___

###  pending

▸ **pending**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *void*

Print pending message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *void*

___

###  start

▸ **start**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *void*

Print start message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *void*

___

###  stop

▸ **stop**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *void*

Print stop message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *void*

___

###  success

▸ **success**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *void*

Print success message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *void*

___

###  update

▸ **update**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *void*

Print update message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *void*

___

###  watch

▸ **watch**(`message`: string | [MessageNode](../modules/_src_contracts_.md#messagenode), ...`args`: string[]): *void*

Print watch message

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; [MessageNode](../modules/_src_contracts_.md#messagenode) |
`...args` | string[] |

**Returns:** *void*

## Object literals

###  actions

### ▪ **actions**: *object*

List of actions that can be logged using the logger

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

▪ **watch**: *object*

* **badge**: *string* =  figures.ellipsis

* **color**: *"yellow"* = "yellow"

* **logLevel**: *"info"* = "info"
