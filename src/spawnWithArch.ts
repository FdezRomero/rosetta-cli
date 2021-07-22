import { spawn } from 'child_process';

import { getShellLevel } from './shell';
import { Arch } from './types';

const getArchName = (arch: Arch): string | undefined =>
  Object.keys(Arch).find(key => (Arch as Record<string, string>)[key] === arch);

const pluralize = (num: number, word: string) =>
  `${num} ${word}${num > 1 ? 's' : ''}`;

export const spawnWithArch = (
  arch: Arch,
  commands: string[],
  shellMode: boolean = false
): void => {
  const command = commands.join(' ');
  const archName = getArchName(arch);
  const shellLevel = getShellLevel();

  console.log(`🪨  Running "${command}" in ${archName} (${arch}) mode.`);

  if (shellMode) {
    console.log(
      `🔻 You are ${pluralize(
        shellLevel + 1,
        'shell'
      )} deep now. Type "exit" to quit.`
    );
  }

  const childProcess = spawn('arch', [`-${arch}`, ...commands], {
    stdio: 'inherit'
  });

  childProcess.on('close', () =>
    console.log(`✨ ${archName} (${arch}) execution finished.`)
  );
};
