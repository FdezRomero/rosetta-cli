![rosetta-cli logo](https://raw.githubusercontent.com/FdezRomero/rosetta-cli/main/assets/rosetta-cli.png)

# rosetta-cli

Easily switch & run commands on Intel/ARM modes in M1-powered Macs with Rosetta 2.

It provides a more comfortable user experience on top of the `arch` and `softwareupdate` binaries in macOS.

## Requirements

- A Mac with an ARM CPU, like the Apple M1 chip.
- Node.js v14 or later.

## Install

### Global install (recommended, works offline)

```shell
npm i -g rosetta-cli
rosetta
```

### Without installing (network needed)

```shell
npx rosetta-cli
```

## Usage

```
Usage: rosetta [options] [commands...]

  rosetta                              prompts for mode and starts a new shell

  rosetta [-i, --intel]                starts a new shell in Intel (x86_64) mode
  rosetta [-a, --arm]                  starts a new shell in ARM (arm64) mode

  rosetta [-i, --intel] <commands...>  runs the commands in Intel (x86_64) mode
  rosetta [-a, --arm] <commands...>    runs the commands in ARM (arm64) mode

Options:
  -i, --intel    run in Intel (x86_64) mode
  -a, --arm      run in ARM (arm64) mode
  -v, --version  output the version number
  -h, --help     display help for command

Commands:
  install        installs Rosetta 2 on this Mac
```

## Contributing

Check out [CONTRIBUTING.md](CONTRIBUTING.md).

MIT licensed. Created and maintained by Rodrigo Fernández ([GitHub](https://github.com/FdezRomero), [Twitter](https://twitter.com/FdezRomero)).
