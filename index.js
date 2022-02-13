/**
 * @author Cédric Tailly
 * @description Check if script is executed in an elevated mode : with sudo on Linux and from an administrator account on Windows.
 */

module.exports.check = () => {
  return new Promise((resolve, reject) => {
    if ( require('os').platform().indexOf('win32') >= 0 )
      require('child_process').exec('net session', (error, stdout, stderr) => {
        resolve(!error);
      });
    else
      resolve(!!process.env.SUDO_UID);
  });
};
