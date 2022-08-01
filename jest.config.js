// jest.config.js

const swiperMocks = require('./mocks/misc/swiper');

module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    ...swiperMocks.moduleNameMapper,
    '\\.(scss|css|less)$': 'identity-obj-proxy',
  },
  transform: {
    ...swiperMocks.transform,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransformer.js',
  },
  transformIgnorePatterns: [

    ...swiperMocks.transformIgnorePatterns,
  ],
};
