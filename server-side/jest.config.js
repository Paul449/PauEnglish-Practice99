export default {
    testEnvironment: "node", // Ensures Jest runs in a Node.js environment
    transform: {}, // Keeps Jest from trying to transform ES modules
    moduleFileExtensions: ["js", "mjs"], // Supports ES modules
    preset: "@shelf/jest-mongodb"
  };
  