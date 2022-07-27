import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export default function useSearch({searchTerm,pageNumber=1}) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [searchResults, setsearchResults] = useState(() => ({
        data: {},
        isLoading: true,
    }));

    useEffect(() => {
      //  console.log('useSearch,getsearchResults')
        if (!apiRef || isApiMetadataLoading) {
            return () => { };
        }

        const controller = new AbortController();

        async function getsearchResults({ searchTerm }) {
            //console.log('async function getsearchResults')
            try {
                if (searchTerm === undefined || searchTerm === null || searchTerm === '') {
                    setsearchResults({ data: {}, isLoading: false });
                    return;
                }

                setsearchResults({ data: {}, isLoading: true });
                const url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent('[[at(document.type, "product")]]')}&q=${encodeURIComponent('[[fulltext(document,"' + searchTerm + '" )]]')}&lang=en-us&pageSize=20&page=${pageNumber}`;


                // console.log("test:", apiRef);

                const response = await fetch(
                    url,
                    {
                        signal: controller.signal,
                    }
                );
                const data = await response.json();

                setsearchResults({ data, isLoading: false });
            } catch (err) {
                setsearchResults({ data: {}, isLoading: false });
                console.error(err);
            }
        }

        getsearchResults({searchTerm,pageNumber});

        return () => {
            controller.abort();
        };
    }, [apiRef, isApiMetadataLoading, searchTerm,pageNumber]);

    return searchResults;
}
