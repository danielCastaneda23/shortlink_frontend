import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  coverageThreshold:{
    global:{
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};

export default config;