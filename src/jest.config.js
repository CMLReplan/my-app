module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!react-router-dom)" // ✅ allow Jest to transform react-router-dom
  ],
  moduleDirectories: ["node_modules", "src"]
};
