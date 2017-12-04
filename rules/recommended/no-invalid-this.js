const path = require("path")
const name = "no-invalid-this"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "warn",

  tests: {
    valid: [{
      code: `
        // This is okay because LegacyClass is in class case, so this is likely some old code
        function LegacyClass() {
          this.test = "foo"
        }
      `
    }, {
      code: `
        class Es6Class {
          constructor() {
            // This is okay, because we're in a class
            this.test = "foo"
          }

          getTest() {
            // This is okay because we're in a class member function
            return this.test
          }
        }
      `
    }, {
      code: `
        // Both of these are okay because the 'this' will refer to the parent class
        const objectLiteral = {
          foo: function foo() {
            this.test = "foo"
          }
        }

        const objectLiteralWithClassStyleMethods = {
          foo() {
            this.test = "foo"
          }
        }
      `
    }, {
      code: `
        const object = {
          foo: "test"
        }

        // This is okay because using .bind() sets a 'this'
        const test = (function test() {
          console.log(this.foo)
        }).bind(object)
      `
    }],

    invalid: [{
      code: `
        // Since the name of the function doesn't look class-y, eslint will flag it
        function regularFunc() {
          this.test = "foo"
        }
      `,
      errors: 1
    }, {
      code: `
        // Not scoped to anything but window
        this.test = "foo"
      `,
      errors: 1
    }, {
      code: `
        // In this case, the fat-arrow function inherits the parent scope, which doesn't
        // have a 'this'.
        const someFn = () => this.test = "foo"
      `,
      errors: 1
    }],
  },
}
