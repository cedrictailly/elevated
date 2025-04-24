/**
 * Checks if the script is running with elevated permissions.
 * On Windows, this checks if the script is running with administrator privileges.
 * On Linux, this checks if the script is running with sudo or as root.
 * @returns {boolean} True if the script is running with elevated permissions, false otherwise.
 */
export function check(): boolean;

/**
 * Requires the script to run with elevated permissions.
 * Throws an error with a platform-specific message if the script is not running with elevated permissions.
 * @throws {Error} If the script is not running with elevated permissions.
 */
export function required(): void;

/**
 * Custom error message to be thrown when the script is not running with elevated permissions.
 */
export let message: string;

declare const elevated: {
  /**
   * Checks if the script is running with elevated permissions.
   * On Windows, this checks if the script is running with administrator privileges.
   * On Linux, this checks if the script is running with sudo or as root.
   * @returns {boolean} True if the script is running with elevated permissions, false otherwise.
   */
  check: typeof check;

  /**
   * Requires the script to run with elevated permissions.
   * Throws an error with a platform-specific message if the script is not running with elevated permissions.
   * @throws {Error} If the script is not running with elevated permissions.
   */
  required: typeof required;

  /**
   * Custom error message to be thrown when the script is not running with elevated permissions.
   */
  message: string;
};

export default elevated;