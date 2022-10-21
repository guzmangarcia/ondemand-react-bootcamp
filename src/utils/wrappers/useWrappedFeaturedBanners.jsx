import { useState, useEffect } from 'react';
import useFeaturedBanners from '../hooks/useFeaturedBanners';

export default function useWrappedFeaturedBanners({ pageNumber = 1 }) {
  const [wrappedData, setWrappedData] = useState(() => ({
    bannerDataItems: {},
    isBannerLoading: true,
  }));
  const { data: bannerData, isLoading } = useFeaturedBanners({ pageNumber });

  useEffect(() => {
    let bannerDataItems = [];
    if (bannerData?.results !== undefined) {
      bannerDataItems = bannerData.results.map((row, index) => ({
        id: index + 1,
        src: row.data.main_image.url,
        alt: 'banner products!',
        text: 'banner products!',
      }));
      setWrappedData({
        bannerDataItems,
        isBannerLoading: isLoading,

      });
    }
  }, [bannerData, isLoading]);

  return wrappedData;
}
