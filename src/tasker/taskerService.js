import tasker from "./tasker";
import config from "../config";

/**
 * A number, or a string containing a number.
 * @typedef {('none'|'priority'|'all')} dndState
 */

export default {
  /**
   * Set the Do Not Disturb state
   * @param {dndState} state
   */
  setDnd(state) {
    tasker.performTask(config.toggleDndTaskName, 1, state);
  },

  /**
   * Gets the Do No Disturb state
   * @returns {dndState}
   */
  getDnd() {
    return tasker.global("INTERRUPT");
  },

  destroyScene(name) {
    tasker.destroyScene(name);
  },

  /**
   * Sets Wifi on or off
   * @param {boolean} setOn
   */
  setWifi(setOn) {
    return tasker.setWifi(setOn);
  },

  /**
   *
   * @param {string} taskName
   * @param {int} priority
   * @param {string} parameterOne
   * @param {string} parameterTwo
   */
  performTask(taskName, priority, parameterOne, parameterTwo) {
    return tasker.performTask(taskName, priority, parameterOne, parameterTwo);
  }
};
