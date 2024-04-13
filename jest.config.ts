import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.module\\.scss$": "identity-obj-proxy",
  },
  testEnvironment: "jest-environment-jsdom",
};

export default config;
