/*
 * Using Jest (https://jestjs.io/en/) and Enzyme (https://airbnb.io/enzyme/) for testing
 * Additionaly using enzyme-to-json (https://www.npmjs.com/package/enzyme-to-json) as snapshot serializer
 */
module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
}