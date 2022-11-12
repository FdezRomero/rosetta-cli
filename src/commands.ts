export const GET_INTEL_CPU =
  '/usr/sbin/sysctl -n machdep.cpu.brand_string | grep -o "Intel"';
export const GET_MACOS_VERSION = '/usr/bin/sw_vers -productVersion';
export const INSTALL_ROSETTA =
  '/usr/sbin/softwareupdate --install-rosetta --agree-to-license';
export const LIST_ROSETTA_FILES =
  'pkgutil --files com.apple.pkg.RosettaUpdateAuto';
