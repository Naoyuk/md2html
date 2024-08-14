export default {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
          useESM: true,
      },
    ],
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
