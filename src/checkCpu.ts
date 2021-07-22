import { execAsync } from './execAsync';

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

export const checkCpu = async (): Promise<void> => {
  const intelCpu = await hasIntelCpu();

  if (intelCpu) {
    throw new Error('You need a Mac with an ARM processor to run this tool.');
  }
};
