export enum Arch {
  ARM = 'arm64',
  Intel = 'x86_64'
}

export type Opts = {
  arm?: boolean;
  intel?: boolean;
};
