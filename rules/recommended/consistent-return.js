const path = require("path")
const name = "consistent-return"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "warn",

  tests: {
    valid: [{
      code: `
function test(foo) {
  if (foo === true) {
    return "yes"
  }
  return "no"
}`,
    }],

    invalid: [{
      code: `
function test(foo) {
  if (foo === true) {
    return "yes"
  }
  return
}`,
      errors: 1
    }],
  },
}
