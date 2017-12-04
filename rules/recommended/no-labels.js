const path = require("path")
const name = "no-labels"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "error",

  tests: {
    valid: [{
      code: `
        let exitLoop = false
        for(let i = 0; i < 10; i++) {
          while(true) {
            exitLoop = true
            break
          }
          if (exitLoop) break
        }
      `,
    }],

    invalid: [{
      code: `
        outerLoop: // First error is defining the label
        for(let i = 0; i < 10; i++) {
          while(true) {
            break outerLoop; // Second error is using the label
          }
        }
      `,
      errors: 2
    }],
  },
}
