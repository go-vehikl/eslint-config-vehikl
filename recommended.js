/*
 * Recommended rules
 *
 * These rules should be about eliminating javascript errors and common pitfalls.
 *
 * See examples and information for each rule in rules/recommended/
 */

const path = require("path")
const fs = require("fs")
const rulesDirectory = path.resolve(__dirname, "rules", "recommended")
const ruleDefinitions = fs.readdirSync(rulesDirectory).reduce(function (rules, entry) {
  const isJsFile = /.js$/.test(entry)
  if (!isJsFile) return rules

  const thisRule = require(path.resolve(rulesDirectory, entry))
  if (!thisRule) return rules

  return rules.concat(thisRule)
}, [])

module.exports = {
  rules: ruleDefinitions.reduce(function (rules, rule) {
    rules[rule.rule] = rule.options
    return rules
  })
  //   "consistent-return": "warning", // If one branch of a function returns a value, all other branches should also return a value
  //   "curly": ["error", "multi", "consistent"], // Avoid curlies for single-line blocks, but in a chain, if one block needs curlies, force all other blocks in the chain to use curlies
  //   "no-caller": "error", // Don't use arguments.caller or arguments.calless
  //   "no-else-return": "warning", // If you have an if and else, and the if has an explicit return statement, you can avoid using an else condition
  //   "no-extra-bind": "warning", // Don't bind if the function isn't using `this`
  //   "no-implicit-globals": "warning", // Don't put stuff in globals
  //   "no-invalid-this": "warning", // Don't use this if you're not in code being ran from a class-like object
  //   "no-labels": "error", // Don't use labels.
  //   "no-new-wrappers": "error", // Don't use new on type primitives (String, Number, Boolean, Object)
  //   "no-new-func": "error", // Don't use new on a function, that's why we have classes
  //   "no-param-reassign": "warning", // Don't change the value of a parameter in a function, since this is a side-effect
  //   "no-return-assign": "error", // Don't allow assignment in a return
  //   "no-return-await": "warning", // Don't allow async functions to immediately return an await.
  //   "no-self-compare": "error", // Don't allow comparisons to self, which is usually a refactor bug
  //   "no-unmodified-loop-condition": "error", // Don't allow infinite loops, and prefer loops with variables rather than breaks
  //   "no-useless-concat": "error", // Don't concat things in code when it can be done manually
  //   "no-useless-call": "error", // Don't allow .call or .apply unless there is a good reason
  //   "require-await": "warning", // If you have an async function, it should have at least one await
  //   "no-shadow": "warning", // Don't have same-name variables in various levels of scope (can be misleading)
  //   "no-shadow-restricted-names": "error", // Don't use variable names that are restricted (ie undefined, null, etc.)
  //   "no-use-before-define": "error", // Don't use variables before they are defined
  //   "init-declarations": ["error", "always"], // If you're creating a variable, it must start with a value
  //   "dot-location": ["error", "property"], // Multi-line chaining of an object should have dots on the next line
  //   "dot-notation": ["error", { "allowKeywords": true }], // Prefer using dot notation .key and not ["key"].
  //   "eqeqeq": "error", // Always use type-safe comparisons
  //   "no-lone-blocks": "error", // Don't use blocks unnecessarily
  //   "yoda": ["error", "never"], // Use variable <condition> value, and not the opposite
  //   "no-loop-func": "error", // If you're creating functions in a loop, make sure the variables they use are properly scoped with let or const
  //   "no-magic-numbers": ["warning", { "ignore": [1] }], // You must create constants to better identify numbers.  Ie `const a = test - 10` is bad because there is no context to what 10 actually means.
  //   "no-sequences": "error", // Don't allow comma-separated code for initialization, except in for loops.
  // }
}
