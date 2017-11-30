const path = require("path")
const name = "no-template-curly-in-string"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "error",

  tests: {
    valid: [{
      code: "var foo = `test ${1 + 2}`",
    }],

    invalid: [{
      code: "var foo = 'test ${1 + 2}'",
      errors: 1
    }],
  },
}
