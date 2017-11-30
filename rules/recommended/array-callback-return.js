const path = require("path")
const name = "array-callback-return"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "error",

  tests: {
    valid: [{
      code: "[1, 2, 3].every((num) => { return num > 2 })",
    }, {
      code: "[1, 2, 3].filter((num) => { return num % 2 === 0 })",
    }, {
      code: "[1, 2, 3].find((num) => { return num === 2 })",
    }, {
      code: "[1, 2, 3].findIndex((num) => { return num === 2 })",
    }, {
      code: "[1, 2, 3].map((num) => { return num + 1 })",
    }, {
      code: "[1, 2, 3].reduce((memo, num) => { return [num].concat(memo) }, [])",
    }, {
      code: "[1, 2, 3].reduceRight((memo, num) => { return [num].concat(memo) }, [])",
    }, {
      code: "[1, 2, 3].some((num) => { return num > 2 })",
    }, {
      code: "[1, 2, 3].sort((a, b) => { return Math.sign(a - b) })",
    }],

    invalid: [{
      code: "[1, 2, 3].every((num) => { })",
      errors: 1,
    }, {
      code: "[1, 2, 3].filter((num) => { })",
      errors: 1,
    }, {
      code: "[1, 2, 3].find((num) => { })",
      errors: 1,
    }, {
      code: "[1, 2, 3].findIndex((num) => { })",
      errors: 1,
    }, {
      code: "[1, 2, 3].map((num) => { })",
      errors: 1,
    }, {
      code: "[1, 2, 3].reduce((memo, num) => {) }, [])",
      errors: 1,
    }, {
      code: "[1, 2, 3].reduceRight((memo, num) => { }, [])",
      errors: 1,
    }, {
      code: "[1, 2, 3].some((num) => { })",
      errors: 1,
    }, {
      code: "[1, 2, 3].sort((a, b) => { })",
      errors: 1,
    }],
  },
}

