// import React from 'react'

// const BlogPosts = ({ blogPost, onDelete }) => {
//   return (
//     <div className='blog-details'>
     
//       <div className='blog-img'>
//         <img src={blogPost.image} alt={blogPost.image} />
//       </div>
//       <div className='blog-desc'>
//       <h2>{blogPost.title}</h2>
//       <p>{blogPost.body}</p>
//       <button onClick={() => onDelete(blogPost.id)}>Ta bort inlägg</button>
//       </div>
     
//     </div>
//   )
// }

// export default BlogPosts

import React from 'react'
import { Link } from 'react-router-dom'


const BlogPosts = ({ blogPost, onDelete }) => {

return (
    <div className='blog-wrapper'>
      <Link to={`/posts/${blogPost.id}`} className='post-item'>
        <div className='blog-details'>

          <div className='blog-desc'>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.body}</p>
          </div>
        </div>
      </Link>
      <button onClick={() => onDelete(blogPost.id)} className='remove-btn'>remove post</button>
    </div>
  )
}

export default BlogPosts