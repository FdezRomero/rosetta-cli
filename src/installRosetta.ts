import { exec, spawn } from 'child_process';
import { access } from 'fs/promises';
import { promisify } from 'util';

const execAsync = promisify(exec);

const fileExists = async (file: string): Promise<boolean> => {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
};

const hasIntelCpu = async (): Promise<boolean> => {
  try {
    await execAsync(
      '/usr/sbin/sysctl -n machdep.cpu.brand_string | grep -o "Intel"'
    );

    return true;
  } catch {
    return false;
  }
};

const getMajorMacOSVersion = async (): Promise<number> => {
  const { stdout: version } = await execAsync(
    '/usr/bin/sw_vers -productVersion'
  );

  const [major] = version?.split('.');
  return Number(major ?? 0);
};

export const installRosetta = async (): Promise<void> => {
  const intelCpu = await hasIntelCpu();

  if (intelCpu) {
    return console.log(
      '✅ Your Mac has an Intel CPU, no need to install Rosetta 2.'
    );
  }

  const rosettaInstalled = await fileExists(
    '/Library/Apple/System/Library/LaunchDaemons/com.apple.oahd.plist'
  );

  if (rosettaInstalled) {
    return console.log('✅ Your Mac already has Rosetta 2 installed.');
  }

  const majorMacOSVersion = await getMajorMacOSVersion();

  if (majorMacOSVersion < 11) {
    return console.error(
      '❌ You need macOS Big Sur or later in order to install Rosetta 2.'
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
        return resolve();
      }

      return reject();
    });

    childProcess.once('error', err => reject(err));
  });
};
