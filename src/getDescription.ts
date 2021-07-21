export const getDescription = (): string => {
  const paths = process.argv[1].split('/');
  const binName = paths[paths.length - 1];

  return `  ${binName}                              Prompts for mode and starts a new shell.

  ${binName} [-i, --intel]                Starts a new shell in Intel (x86_64) mode.
  ${binName} [-a, --arm]                  Starts a new shell in ARM (arm64) mode.

  ${binName} [-i, --intel] <commands...>  Runs the commands in Intel (x86_64) mode.
  ${binName} [-a, --arm] <commands...>    Runs the commands in ARM (arm64) mode.`;
};
