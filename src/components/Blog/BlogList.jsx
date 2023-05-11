// import { useState } from 'react'
// import BlogPosts from './BlogPosts'
// import { useEffect } from 'react'


// const BlogList = () => {
//   const[blogs, setBlogs] = useState(null)

//   useEffect(() =>{
// const getPosts = async () =>{
//   const res = await fetch ('http://localhost:3000/posts')
//   if(!res.ok) {
//     console.log(res.statusText);
//     return
//   }
//   const data = await res.json()
//   setBlogs(data)
//   console.log(data);
// }
// getPosts()
//   }, [])

//   const handleDelete = async (id) => {
//     const res = await fetch(`http://localhost:3000/posts/${id}`, {
//       method: 'DELETE',
//     })
//     if (!res.ok) {
//       console.log(res.statusText)
//       return
//     }
//     setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id))
//   }




//   return (
//     <div className='Blogs'>
//       {blogs && blogs.map((blog) => (
//         <BlogPosts className='blogs-details' key={blog.id} blogPost={blog} onDelete={handleDelete}/>

        
//       ))}
//     </div>
//   )
  
// }

// export default BlogList


import { useState } from 'react'
import BlogPosts from '../../pages/BlogPosts'
import { useEffect } from 'react'



const BlogList = ({user}) => {

 
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('http://localhost:3000/posts/') // hämtar bara post från den som är inloggad
      if (!res.ok) {
        console.log(res.statusText);
        return
      }
      const data = await res.json()
      setBlogs(data)
      console.log(data);
    }
    getPosts()
  }, [])

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE',
    })
    if (!res.ok) {
      console.log(res.statusText)
      return
    }
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id))
  }




  return (
    <div className='Blogs'>
      {blogs && blogs.map((blog) => (
        <BlogPosts className='blogs-details' key={blog.id} blogPost={blog} onDelete={handleDelete} />
      ))}
    </div>
  )

}

export default BlogList