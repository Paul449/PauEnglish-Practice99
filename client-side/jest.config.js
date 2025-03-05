export default {
    testEnvironment: "jsdom", // Use jsdom to simulate a browser environment for React testing
    transform: {
      "^.+\\.(js|jsx|mjs|ts|tsx)$": "babel-jest", // Transform JS/JSX/TSX files using Babel
    },
    moduleFileExtensions: ["js", "jsx", "mjs", "ts", "tsx"], // File extensions Jest should recognize
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // For adding custom DOM matchers
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1", // If you use alias imports like '@', configure here
    },
    transformIgnorePatterns: ["/node_modules/(?!your-module-name)"], // Optional: transform specific node_modules
  };
  