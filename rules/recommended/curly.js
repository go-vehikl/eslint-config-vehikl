const path = require("path")
const name = "curly"
const options = ["multi", "consistent"]

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: ["error"].concat(options),

  tests: {
    valid: [{
      code: `
        function test(foo) {
          if (foo === true) return "yes"
          else if (foo === false) return "no"
          return "maybe"
        }
      `,
      options: options,
    }, {
      code: `
        // Only allow braces for multi-line statements
        function test(foo) {
          if (foo === true) {
            console.log('will be yes')
            return "yes"
          } else if(foo === false) {
            console.log('will be no')
            return "no"
          }
          return "maybe"
        }
      `,
      options: options,
    }],

    invalid: [{
      code: `
        function test(foo) {
          if (foo === true) {
            return "yes"
          } else if(foo === false) return "no"
          return "maybe"
        }
      `,
      options: options,
      errors: 1
    }, {
      code: `
        // Invalid because braces are used, but each branch is a single line
        function test(foo) {
          if (foo === true) {
            return "yes"
          } else if(foo === false) {
            return "no"
          }
          return "maybe"
        }
      `,
      options: options,
      errors: 2,
    }, {
      code: `
        // Invalid because braces are used, but each branch is a single line
        function test(foo) {
          if (foo === true) {
            console.log('will be yes')
            return "yes"
          } else if(foo === false) return "no"
          return "maybe"
        }
      `,
      options: options,
      errors: 1,
    }],
  },
}
