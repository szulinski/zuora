import React from 'react'
import '../css/Feed.css'
import ZuoraBox from './ZuoraBox'
import Post from './Post'

function Feed() {
  return (
    <div className = 'feed'>
        <ZuoraBox />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Feed