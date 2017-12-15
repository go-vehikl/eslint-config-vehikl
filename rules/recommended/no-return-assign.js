const path = require("path")
const name = "no-return-assign"
const options = ["always"]

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: ["warn"].concat(options),

  tests: {
    valid: [{
      code: `
        class Test {
          constructor() {
            this.foo = 1
          }

          test(a) {
            this.foo = a + 1
            return this.foo
          }
        }
      `,
      options: options,
    }],

    invalid: [{
      code: `
        class Test {
          constructor() {
            this.foo = 1
          }

          test(a) {
            return this.foo = a + 1
          }
        }
      `,
      options: options,
      errors: 1
    }],
  },
}
