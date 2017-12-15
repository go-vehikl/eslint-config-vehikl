const path = require("path")
const name = "no-new-func"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "error",

  tests: {
    valid: [{
      code: `
        const fn = function fn(a, b) {
          return a + b
        }
      `
    }],

    invalid: [{
      code: `
        // Dangerous because it works like eval
        const fn = new Function("a", "b", "a + b")
      `,
      errors: 1
    }],
  },
}
