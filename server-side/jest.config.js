export default {
  verbose: true,
  testEnvironment: "node", // Use Node.js environment for backend testing
  transform: {
    "^.+\\.(js|jsx|mjs|ts|tsx)$": "babel-jest", // Transform JavaScript and TypeScript files using Babel
  },
  preset: "@shelf/jest-mongodb",
  moduleFileExtensions: ["js", "jsx", "mjs", "ts", "tsx"], // Extensions Jest should recognize
  transformIgnorePatterns: ["/node_modules/"], // Exclude node_modules from transformation
};
