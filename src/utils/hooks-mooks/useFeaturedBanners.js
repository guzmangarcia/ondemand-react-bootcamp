import { useState, useEffect } from 'react';

import useFeaturedBannersMock from '../../mocks/en-us/featured-banners.json';;


export default function useFeaturedBanners() {

  const [featuredBanners, setFeaturedBanners] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setFeaturedBanners({ data: {}, isLoading: true });

        const data = useFeaturedBannersMock;

        setFeaturedBanners({ data, isLoading: false });
      } catch (err) {
        setFeaturedBanners({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, []);

  return featuredBanners;
}
