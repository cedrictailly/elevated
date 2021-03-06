/**
 * @author Cédric Tailly
 * @description Check if script is executed in an elevated mode : with sudo on Linux and from an administrator account on Windows.
 */

const win32 = require('os').platform().indexOf('win32') >= 0;

module.exports.check = () => {
  return new Promise((resolve, reject) => {
    if ( win32 )
      require('child_process').exec('net session', (error, stdout, stderr) => {
        resolve(!error);
      });
    else
      resolve(process.getuid() == 0 || !!process.env.SUDO_UID);
  });
};

module.exports.required = async () => {
  if ( !await module.exports.check() )
    throw new Error(win32 ? "Administrator privileges required" : "SUDO required");
};
