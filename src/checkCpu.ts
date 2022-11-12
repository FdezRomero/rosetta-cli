import { GET_INTEL_CPU } from './commands';
import { execAsync } from './execAsync';

const hasIntelCpu = async (): Promise<boolean> => {
  try {
    await execAsync(GET_INTEL_CPU);
    return true;
  } catch {
    return false;
  }
};

export const checkCpu = async (): Promise<void> => {
  const intelCpu = await hasIntelCpu();

  if (intelCpu) {
    throw new Error('You need a Mac with an ARM processor to run this tool.');
  }
};
