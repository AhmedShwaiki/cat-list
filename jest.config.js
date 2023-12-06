module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: 'tests/.*\\.ts$',
    moduleFileExtensions: ['ts', 'js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
}
