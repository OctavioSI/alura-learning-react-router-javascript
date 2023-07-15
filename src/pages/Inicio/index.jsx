import React from 'react'
import styles from './Inicio.module.scss'
import posts from 'assets/posts.json'
import PostCard from 'components/PostCard'

export default function Inicio() {
  return (
      <ul className={styles.posts}>
        {posts.map((post) => {
          return (
            <PostCard post={post} />
          )
        })}
      </ul>
  )
}
