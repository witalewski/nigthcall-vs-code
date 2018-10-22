# 🌃 Nightcall (VS Code)

[![Build Status](https://travis-ci.org/witalewski/nigthcall-vs-code.svg?branch=master)](https://travis-ci.org/witalewski/nigthcall-vs-code)

Automatically toggle between light and dark color theme.

## Features

This extension watched `~/.nightcall` for changes to automatically toggle between color themes. [Nightcall](https://www.npmjs.com/package/nightcall) must be installed and running.

## Requirements
> As of version 1.0.5 Nightcall only supports macOS!

Install [Nightcall](https://www.npmjs.com/package/nightcall):
```sh
yarn global add nightcall
```
or:
```sh
npm i -g nightcall
```

## Extension Settings

This extension contributes the following settings:

* `nightcall.dayTheme`: color theme to use during daytime
* `nightcall.nightTheme`: color theme to use at night

## Origin
This extension has been inspired by [NightSwitch](https://marketplace.visualstudio.com/items?itemName=gharveymn.nightswitch). In comparison with NightSwitch, Nightcall (VS Code) utilizes an external application to schedule changing theme so it can be synchronized with system theme and other applications. Also, Nightcall uses location of WiFi towers by default to provide greater accuracy and avoid false results when behind a proxy or VPN.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONCUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Kris Witalewski** - *Initial work* - [@witalewski](https://github.com/witalewski/)

See also the list of [contributors](https://github.com/witalewski/nightcall/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details