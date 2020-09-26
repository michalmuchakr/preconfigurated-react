module.exports = {
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/jest-mock-config/css.js',
    '.*\\.(jpg|jpeg|png|gif)$': '<rootDir>/jest-mock-config/img.js',
  },
};
