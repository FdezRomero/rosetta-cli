import { spawn } from 'child_process';

import { execAsync } from './execAsync';

export const isRosettaInstalled = async (): Promise<boolean> => {
  const { stdout } = await execAsync(
    'pkgutil --files com.apple.pkg.RosettaUpdateAuto'
  );

  return Boolean(stdout);
};

const getMajorMacOSVersion = async (): Promise<number> => {
  const { stdout: version } = await execAsync(
    '/usr/bin/sw_vers -productVersion'
  );

  const [major] = version?.split('.');
  return Number(major ?? 0);
};

export const installRosetta = async (): Promise<void> => {
  const rosettaInstalled = await isRosettaInstalled();

  if (rosettaInstalled) {
    return console.log('✅ Your Mac already has Rosetta 2 installed.');
  }

  const majorMacOSVersion = await getMajorMacOSVersion();

  if (majorMacOSVersion < 11) {
    throw new Error(
      'You need macOS Big Sur or later in order to install Rosetta 2.'
    );
  }

  const childProcess = spawn(
    '/usr/sbin/softwareupdate --install-rosetta --agree-to-license',
    {
      stdio: 'inherit'
    }
  );

  return new Promise<void>((resolve, reject) => {
    childProcess.once('exit', code => {
      if (code === 0) {
        console.log('✅ Rosetta 2 has been installed.');
        return resolve();
      }

      return reject();
    });

    childProcess.once('error', err => reject(err));
  });
};
