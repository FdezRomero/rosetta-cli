import { Arch, Opts } from './types';

export const getArch = ({ arm, intel }: Opts): Arch | undefined => {
  if (arm && intel) {
    throw new Error("You can't select both ARM and Intel modes.");
  }

  if (arm) {
    return Arch.ARM;
  }

  if (intel) {
    return Arch.Intel;
  }

  return;
};
