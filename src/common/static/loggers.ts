/**
 * In this file we create all the loggers and set their level.
 *
 * This is an ugly workaround, otherwise none of the log modules get any prefix (they don't ineherit the prefix like
 * the documentation says it should).
 * I have created an issue ticket at the library repo: https://github.com/kutuluk/loglevel-plugin-prefix/issues/9
 *
 * Hopefully this can be fixed, I don't want to have to set the prefix for every logger.
 *
 * Ideally every file should just be able to include their module like so:
 * const log = require("loglevel").getLogger('module-name');
 */
import * as logRoot from 'loglevel';
const prefix = require('loglevel-plugin-prefix');

const levels = logRoot.levels;
const DEFAULT_LOG_LEVEL = levels.DEBUG; // By order of verbosity: trace, debug, info, warn, error
const LOGGING_MODULE_CLASSES: string = 'logging_module_classes';
const LOGGING_MODULE_STOPWATCH: string = 'logging_module_stopwatch';
const LOGGING_MODULE_COMMON: string = 'logging_module_common';
const LOGGING_MODULE_STATE: string = 'logging_module_state';
const LOGGING_MODULE_COMPONENTS: string = 'logging_module_components';

// Prefixes the log with '[<NAME OF LEVEL>]:'
function format(level: string, /* name: string, timestamp: string */) {
  return '['+ level + ']:'
}

prefix.reg(logRoot);
prefix.apply(logRoot, { format });
logRoot.setLevel(levels.TRACE);

export const classLogger = logRoot.getLogger(LOGGING_MODULE_CLASSES);
export const stopwatchLogger = logRoot.getLogger(LOGGING_MODULE_STOPWATCH);
export const commonLogger = logRoot.getLogger(LOGGING_MODULE_COMMON);
export const stateLogger = logRoot.getLogger(LOGGING_MODULE_STATE);
export const componentLogger = logRoot.getLogger(LOGGING_MODULE_COMPONENTS);

prefix.apply(classLogger, { format });
prefix.apply(stopwatchLogger, { format });
prefix.apply(commonLogger, { format });
prefix.apply(stateLogger, { format });
prefix.apply(componentLogger, { format });

/**
 * Set individual log levels here!!!
 */
classLogger.setLevel(levels.INFO);
stopwatchLogger.setLevel(levels.SILENT);
commonLogger.setLevel(DEFAULT_LOG_LEVEL);
stateLogger.setLevel(DEFAULT_LOG_LEVEL);
componentLogger.setLevel(logRoot.levels.ERROR);