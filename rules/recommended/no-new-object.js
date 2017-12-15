const path = require("path")
const name = "no-new-object"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "error",

  tests: {
    valid: [{
      code: `
        const obj = {}
      `,
    }, {
      code: `
        class SomeCustomThing {}
        const obj = new SomeCustomThing()
      `
    }],

    invalid: [{
      code: `
        const obj = new Object()
      `,
      errors: 1
    }],
  },
}
