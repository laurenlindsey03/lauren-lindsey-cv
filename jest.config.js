module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts','tsx','js','jsx','json'],
  transform: { '^.+\\.(t|j)sx?$': 'babel-jest' }, // or @swc/jest if you kept SWC
  moduleNameMapper: {
    '^@/src/(.*)$': '<rootDir>/src/$1',  // maps "@/src/..." -> "<rootDir>/src/..."
    '^@/(.*)$': '<rootDir>/src/$1',      // maps "@/..." -> "<rootDir>/src/..."
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['**/__tests__/**/*.{spec,test}.[tj]s?(x)'],
};
