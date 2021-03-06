module.exports = {
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
  testEnvironment: "node",
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover"],
  collectCoverage: true,
  preset: "ts-jest",
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "@database/(.*)": "<rootDir>/database/$1",
  },
};
