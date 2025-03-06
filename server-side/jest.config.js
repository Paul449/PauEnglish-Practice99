export default {
  verbose: true,
  testEnvironment: "node", // Use Node.js environment for backend testing
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Transform JavaScript files using Babel
  },
  preset: "@shelf/jest-mongodb",
  moduleFileExtensions: ["js", "jsx"], // Extensions Jest should recognize
  transformIgnorePatterns: ["/node_modules/"], // Exclude node_modules from transformation
};
