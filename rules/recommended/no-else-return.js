const path = require("path")
const name = "no-else-return"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "warning",

  tests: {
    valid: [{
      code: `
function test(foo) {
  let bar = "baz"
  if (foo === true) {
    bar = "wow"
  } else {
    bar = "shibe"
  }
  return bar
}
`,
    }, {
      code: `
function test(foo) {
  if (foo === true) {
    return "wow"
  }
  return "shibe"
}
`,
    }],

    invalid: [{
      code: `
function test(foo) {
  if (foo === true) {
    return "wow"
  } else {
    return "shibe"
  }
}
`,
      errors: 1
    }],
  },
}
