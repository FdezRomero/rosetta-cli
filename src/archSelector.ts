import inquirer from 'inquirer';

import { spawnWithArch } from './spawnWithArch';
import { getSystemShell } from './shell';
import { Arch } from './types';

export const archSelector = async (): Promise<void> => {
  const { arch }: { arch: Arch } = await inquirer.prompt([
    {
      type: 'list',
      name: 'arch',
      message: 'Start a new shell in:',
      choices: [
        {
          name: 'Intel (x86_64), Rosetta 2 emulation mode',
          short: 'Intel',
          value: Arch.Intel
        },
        {
          name: 'ARM (arm64), native CPU mode',
          short: 'ARM',
          value: Arch.ARM
        },
        new inquirer.Separator(),
        {
          name: 'Cancel',
          value: null
        }
      ]
    }
  ]);

  if (!arch) {
    return;
  }

  spawnWithArch(arch, [getSystemShell()], true);
};
