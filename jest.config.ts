import nextJest from 'next/jest'
import path from 'path'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': path.resolve(__dirname, 'src/components/$1'),
    '^@/pages/(.*)$': path.resolve(__dirname, 'src/pages/$1'),
    '^@/context/(.*)$': path.resolve(__dirname, 'src/context/$1'),
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
}

module.exports = createJestConfig(customJestConfig)
