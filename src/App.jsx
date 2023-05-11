// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import BlogList from './components/Blog/BlogList'
// import Home from './pages/Home'
// import Navbar from './components/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import NewPost from './components/Blog/NewPostForm'
// import NewBlog from './pages/Details'


// const App = () => {

//   const [posts, setPosts] = useState([])

//   return (
//     <div>
//       <Navbar />
//       <div className='container'>
//         <Routes>
//           <Route path='/'element={<Home />}/>
//           <Route path='/inlägg' element={<NewBlog setPosts={setPosts}/>} />
//           <Route path='/blogginlägg' element={<BlogList posts={posts} setPosts={setPosts}/>} />
//         </Routes>
//     </div>

 
// </div>
//   )
// }

// export default App
 

import React from 'react'

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import BlogList from './components/Blog/BlogList'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Details from './pages/Details'

import Create from './pages/Create'



const App = () => {



  const [posts, setPosts] = useState([])

  // const [user, setUser] = useState(null)

  return (
    <div>
      {/* <Navbar user={user} setUser={setUser}/> */}
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/add' element={<Create setPosts={setPosts}/>} />
          <Route path='/posts' element={<BlogList posts={posts} setPosts={setPosts}/>} />
          <Route path='/posts/:id' element={<Details posts={posts} setPosts={setPosts}/>} />

        </Routes>
    </div>

 
</div>
  )
}

export default App