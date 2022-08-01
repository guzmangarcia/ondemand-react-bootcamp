// jest.config.js

const swiperMocks = require('./mocks/misc/swiper');

module.exports = {
  moduleNameMapper: {

    ...swiperMocks.moduleNameMapper,
  },
  transform: {

    ...swiperMocks.transform,
  },
  transformIgnorePatterns: [

    ...swiperMocks.transformIgnorePatterns,
  ],
}