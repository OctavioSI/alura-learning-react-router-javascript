import React from 'react'
import styles from './Recomendados.module.scss'
import posts from 'assets/posts.json'
import PostCard from 'components/PostCard';

export default function Recomendados({ currentid }) {

  let selectedposts = [];
  let remainingposts = posts.filter((post) => post.id !== Number(currentid))
  while (selectedposts.length < 4) {
    let randompost = remainingposts[Math.floor(Math.random()*remainingposts.length)];
    selectedposts.push(randompost)    
    remainingposts = remainingposts.filter((post) => post.id !== randompost.id)
  }
  return (
    <div>
      <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
      <ul className={styles.postsRecomendados}>
        {selectedposts.map((post) => {
          return (
            <PostCard post={post} />
          )
        })}
      </ul>
    </div>
  )
}
