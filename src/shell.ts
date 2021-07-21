export const getSystemShell = (): string => process.env.SHELL ?? 'zsh';
export const getShellLevel = (): number => Number(process.env.SHLVL ?? 1);
