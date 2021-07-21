# rosetta-cli

Easily switch & run commands on Intel/ARM modes in M1-powered Macs with Rosetta 2.

## Requirements

- A Mac with an ARM CPU, like the Apple M1 chip.
- Node.js v14 or later.

## Install

### Global install (recommended, works offline)

```shell
npm i -g rosetta-cli
rosetta install
```

### Without installing (network needed)

```shell
npx rosetta-cli install
```

## Usage

```
Usage: rosetta [options] [commands...]

  rosetta                              Prompts for mode and starts a new shell.

  rosetta [-i, --intel]                Starts a new shell in Intel (x86_64) mode.
  rosetta [-a, --arm]                  Starts a new shell in ARM (arm64) mode.

  rosetta [-i, --intel] <commands...>  Runs the commands in Intel (x86_64) mode.
  rosetta [-a, --arm] <commands...>    Runs the commands in ARM (arm64) mode.

Options:
  -i, --intel    run in Intel (x86_64) mode
  -a, --arm      run in ARM (arm64) mode
  -v, --version  output the version number
  -h, --help     display help for command

Commands:
  install        Installs Rosetta 2 on this Mac.
```

## Contributing

Check out [CONTRIBUTING.md](CONTRIBUTING.md).
