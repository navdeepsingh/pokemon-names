module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  testRegex: "((\\.|/*.)(spec))\\.js?$",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "node",
};
