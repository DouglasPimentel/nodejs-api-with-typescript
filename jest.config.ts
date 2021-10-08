import type { Config } from '@jest/types';
import path from 'path';

const root: string = path.resolve(__dirname);

const config: Config.InitialOptions = {
  rootDir: root,
  displayName: 'tests',
  testMatch: ['<rootDir>/test/**/*test.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
};

export default config;
