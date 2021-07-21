import { program } from 'commander';

import { getDescription } from './getDescription';
import { getArch } from './getArch';
import { archSelector } from './archSelector';
import { spawnWithArch } from './spawnWithArch';
import { getSystemShell } from './shell';
import { installRosetta } from './installRosetta';
import { Arch } from './types';
import pkg from '../package.json';

program
  .argument('[commands...]')
  .option('-i, --intel', 'run in Intel (x86_64) mode')
  .option('-a, --arm', 'run in ARM (arm64) mode')
  .passThroughOptions()
  .description(getDescription())
  .action((commands: string[]) => {
    try {
      const arch = getArch(program.opts());

      if (!commands?.length) {
        if (arch) {
          return spawnWithArch(arch, [getSystemShell()], true);
        }

        return archSelector();
      }

      return spawnWithArch(arch ?? Arch.Intel, commands);
    } catch (err) {
      console.error('❌ Error:', err?.message);
    }
  });

program
  .command('install')
  .description('Installs Rosetta 2 on this Mac.')
  .action(async () => {
    try {
      await installRosetta();
    } catch (err) {
      console.error('❌ Error:', err?.message);
    }
  });

program
  .version(pkg.version, '-v, --version')
  .usage('[options] [commands...]')
  .parseAsync();
