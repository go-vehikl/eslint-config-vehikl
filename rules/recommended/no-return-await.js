const path = require("path")
const name = "no-return-await"

module.exports = {
  definition: require(path.join("eslint", "lib", "rules", name + ".js")),
  name: name,
  options: "error",

  tests: {
    valid: [{
      code: `
        async function test() {
          const a = await otherAsyncFn()
          const b = await andAnotherAsyncFn(a)
          return b
        }
      `
    }, {
      code: `
        // This is okay because we're not just doing a single await
        async function test() {
          const a = await otherAsyncFn()
          return await andAnotherAsyncFn(a)
        }
      `
    }],

    invalid: [{
      code: `
        // Since this just does one thing, maybe the caller should be the async
        // function and call otherAsyncFn.
        async function test() {
          return await otherAsyncFn()
        }
      `,
      errors: 1
    }],
  },
}
