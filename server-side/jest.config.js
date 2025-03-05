export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.(js|mjs|jsx|ts|tsx)$": "babel-jest", // Transforms modern JS syntax
  },
  moduleFileExtensions: ["js", "mjs", "jsx", "ts", "tsx"], // Add JSX/TS if needed
  preset: "@shelf/jest-mongodb",
};
