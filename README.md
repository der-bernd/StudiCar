# OneClipboard

## Getting started

### Prerequisites

- Git
- node + npm
- Quasar `npm install -g @quasar/cli`
- Quasar Icon-Genie `npm install -g @quasar/icongenie`
- Recommended: Visual Studio Code with Vetur Extension

### To clone Github-Repository:

```bash
git clone https://[Github-Username]:[Github_password]@github.com/der-bernd/OneClipboard.git
```

### Running local version

#### (Optional) Set up VS Code to show npm scripts

Open settings (CTRL+,) and tick the option _npm.enableScriptExplorer_.

#### PWA

```bash
cd PWA
npm run dev
```

or in VS CODE, in the bottom left corner: NPM SCRIPTS > `PWA/package.json` > `dev - PWA` > hover > little triangle to run

This will open the page in the browser. The address is http://localhost:3000

#### API

```bash
cd API
npm run start
```

or in VS CODE, in the bottom left corner: NPM SCRIPTS > `API/package.json` > `start - API` > hover > little triangle to run

The API can be reached at simply http://localhost
