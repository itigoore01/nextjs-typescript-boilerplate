const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = async () => {
  const jestConfig = await createJestConfig(customJestConfig)();

  // see https://github.com/vercel/next.js/issues/36682 (moduleNameMapper with next/jest no longer works well with absolute imports)
  const moduleNameMapper = {
    ...jestConfig.moduleNameMapper,
    '^@/(.*)$': '<rootDir>/src/$1',
  };

  return {
    ...jestConfig,
    moduleNameMapper,
  };
};
