const path = require("path")
const name = "no-param-reassign"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "error",

  tests: {
    valid: [{
      code: `
        function test(a) {
          return a + 1
        }
      `
    }],

    invalid: [{
      code: `
        function test(a) {
          a += 1
          return a
        }
      `,
      errors: 1
    }],
  },
}
