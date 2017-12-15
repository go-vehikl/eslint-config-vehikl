# eslint-config-vehikl

## Install

### Get the package

```
npm install --save-dev eslint-config-vehikl
```

or

```
yarn add --dev eslint-config-vehikl
```

### Add to linter config

In your .eslintrc file, add the following to the root:

```json
{
  ...
  "extends": ["eslint:recommended", "vehikl/recommended", "vehikl/html"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "es6": true
  },
  ...
}
```
