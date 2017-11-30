const path = require("path")
const fs = require("fs")
const RuleTester = require("eslint").RuleTester

function testRule(tester, configName, rule) {
  const identifier = `${configName}:${rule.name}`
  process.stdout.write(`Testing ${identifier}...`)
  try {
    tester.run(rule.name, rule.definition, rule.tests)
    console.log("ok")
    return []
  } catch(e) {
    process.exitCode = 1
    console.log("err")
    return [{ rule: rule, error: e }]
  }
}

function testConfig(tester, configName) {
  console.log()

  const root = path.resolve(__dirname, "..", "rules", configName)
  const entries = fs.readdirSync(root).filter((entry) => /.js$/.test(entry))

  return {
    configName: configName,
    count: entries.length,
    failures: entries.reduce((failures, entry, idx) => {
      const rule = require(path.resolve(root, entry))
      if (!rule) return failures

      return failures.concat(testRule(tester, configName, rule))
    }, [])
  }
}

function summarizeTests(results) {
  console.log(`\n${results.configName} ran ${results.count} tests, ${results.failures.length} failed`)
  results.failures.forEach((failure) => {
    console.log(` - ${failure.rule.name}: ${failure.error.message}`)
  })
  console.log()
}

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    es6: true
  }
})

summarizeTests(testConfig(tester, "recommended"))
// testConfig(tester, "html")
// testConfig(tester, "accessibility")
