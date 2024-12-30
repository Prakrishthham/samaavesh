export default {
  spec_files: [
    "**/*[sS]pec.?(m)js",
    "**/*[tT]est.?(m)js"
  ],
  helpers: [
    "helpers/**/*.?(m)js"
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
