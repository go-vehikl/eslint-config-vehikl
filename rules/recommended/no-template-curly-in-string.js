const path = require("path")
const name = "no-template-curly-in-string"

/*
 * Just a note, I had to disable no-template-curly-in-string because eslint would
 * flag itself on this.
 */

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "error",

  tests: {
    valid: [{
      code: "var foo = `test ${1 + 2}`", // eslint-disable-line no-template-curly-in-string
    }],

    invalid: [{
      code: "var foo = 'test ${1 + 2}'", // eslint-disable-line no-template-curly-in-string
      errors: 1
    }],
  },
}
