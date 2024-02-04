import { Post } from '../types'

interface PostProps {
    post: Post
}

function PostComponent({post}: PostProps) {
  return (
    <div className='post'>
        <h3 className='title'>{post.title} ({post.id})</h3>
        <p className='body'>{post.body}</p>
    </div>
  )
}

export default PostComponent