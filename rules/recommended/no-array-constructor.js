const path = require("path")
const name = "no-array-constructor"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "error",

  tests: {
    valid: [{
      code: `
        // This is okay because we're just setting a length
        const arr = Array(10)
      `,
    }, {
      code: `
        // Also okay, just setting length
        const arr = new Array(10)
      `
    }],

    invalid: [{
      code: `
        // Can't specify array values this way, just use [0, 1, 2]
        const arr = Array(0, 1, 2)
      `,
      errors: 1
    }, {
      code: `
        // Can't specify array values this way, just use [0, 1, 2]
        const arr = new Array(0, 1, 2)
      `,
      errors: 1
    }],
  },
}
