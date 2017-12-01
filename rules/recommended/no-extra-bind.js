const path = require("path")
const name = "no-extra-bind"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "warn",

  tests: {
    valid: [{
      code: `
        function test(foo) {
          console.log(foo)
        }
        // This bind is okay because we're forcibly setting the param 'foo'. 'a' can be ignored
        test.bind(a, "value")
      `,
    }, {
      code: `
        function test() {
          console.log(this.foo)
        }
        // This bind is okay because test doesn't have a 'this' context, which presumably 'a' provides
        // It may still become a run-time error, but maybe at least it's less prone to issues.
        test.bind(a)
      `,
    }],

    invalid: [{
      code: `
        // This bind is bad because the function doesn't use 'this', and we aren't using bind to push in params ahead of time
        var a = (function test() {
          return 1
        }).bind(b)
      `,
      errors: 1
    }],
  },
}
