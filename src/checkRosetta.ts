import inquirer from 'inquirer';

import { installRosetta, isRosettaInstalled } from './installRosetta';

export const checkRosetta = async (): Promise<void> => {
  const rosettaInstalled = await isRosettaInstalled();

  if (rosettaInstalled) {
    return;
  }

  const { install }: { install: boolean } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'install',
      message: 'Rosetta 2 is not found on this Mac, do you want to install it?'
    }
  ]);

  if (install) {
    return installRosetta();
  }
};
