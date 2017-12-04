const path = require("path")
const name = "no-new-wrappers"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "error",

  tests: {
    valid: [{
      code: `
        const str = "some string"
        const otherStr = String(str)
        const bool = true
        const num = 50000000000
      `,
    }, {
      code: `
        const maybeNumber = "5e10" // Scientific notation, still valid
        const num = Number(maybeNumber)
      `
    }, {
      code: `
        // Since Object isn't technically a primitive, this is valid in
        // the context of this rule. See no-new-object for that fix.
        const obj = new Object()
      `
    }],

    invalid: [{
      code: `
        const source = "5e10"
        const str = new String(source)
        const num = new Number(source)
        const bool = new Boolean(source)
      `,
      errors: 3
    }],
  },
}
