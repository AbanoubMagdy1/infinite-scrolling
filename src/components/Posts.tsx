import  {Fragment} from 'react'
import { usePosts } from '../apis/queries'
import Post from './Post'
import useEventListener from '../hooks/useEventListener'

function Posts() {
  const postsQuery = usePosts()  

  function getMorePosts() { 
    postsQuery.fetchNextPage()
  }

  useEventListener(document, "scroll", () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    console.log(window.scrollY, scrollableHeight)
    if (window.scrollY >= scrollableHeight - 50) {
        getMorePosts()
    }
  })
  

  return (
    <>
        {postsQuery.data?.pages.map((group, index) => (
            <Fragment key={index}>
            {group?.data.map?.((post) => (
                <Post key={post.id} post={post}/>
            ))}
            </Fragment>
        ))}

        {/* <button onClick={getMorePosts} disabled={
            !postsQuery.hasNextPage || postsQuery.isFetchingNextPage
          }>
             {postsQuery.isFetchingNextPage
            ? "Loading more..."
            : postsQuery.hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>   */}
    </>
  )
}

export default Posts