/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require("path");

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
    "@tests/(.*)": "<rootDir>/tests/$1",
  },
};
