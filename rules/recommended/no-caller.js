const path = require("path")
const name = "no-caller"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "error",

  tests: {
    valid: [{
      code: "function test() { return 1 }",
    }],

    invalid: [{
      code: `
        function test() {
          console.log(arguments.caller)
        }
      `,
      errors: 1
    }, {
      code: `
        function test() {
          console.log(arguments.callee)
        }
      `,
      errors: 1
    }],
  },
}
