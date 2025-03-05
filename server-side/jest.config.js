export default {
  testEnvironment: "node", // Use Node.js environment for backend testing
  transform: {
    "^.+\\.(js|jsx|mjs|ts|tsx)$": "babel-jest", // Transform JavaScript and TypeScript files using Babel
  },
  moduleFileExtensions: ["js", "jsx", "mjs", "ts", "tsx"], // Extensions Jest should recognize
  preset: "@shelf/jest-mongodb", // MongoDB setup for backend testing
  transformIgnorePatterns: ["/node_modules/"], // Exclude node_modules from transformation
};

