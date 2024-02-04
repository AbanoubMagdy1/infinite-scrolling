import {useInfiniteQuery} from '@tanstack/react-query'
import {getPosts} from './calls'

export function usePosts() {
    return useInfiniteQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
        initialPageParam: 1,
        getNextPageParam: (lastPage, _, lastPageParam) => {
          if (lastPage.length === 0) {
            return undefined;
          }
          return lastPageParam + 1;
        },
        getPreviousPageParam: (_, __, firstPageParam) => {
          if (firstPageParam <= 1) {
            return undefined;
          }
          return firstPageParam - 1;
        }
    })
}