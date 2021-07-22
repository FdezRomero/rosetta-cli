export const getDescription = (): string => {
  const paths = process.argv[1].split('/');
  const binName = paths[paths.length - 1];

  return `  ${binName}                              prompts for mode and starts a new shell

  ${binName} [-i, --intel]                starts a new shell in Intel (x86_64) mode
  ${binName} [-a, --arm]                  starts a new shell in ARM (arm64) mode

  ${binName} [-i, --intel] <commands...>  runs the commands in Intel (x86_64) mode
  ${binName} [-a, --arm] <commands...>    runs the commands in ARM (arm64) mode`;
};
