import BotaoPrincipal from 'components/BotaoPrincipal'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PostCard.module.scss'

export default function PostCard({ post }) {
  return (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>
        <div className={styles.post}>
          <img
            src={`/assets/posts/${post.id}/capa.png`}
            className={styles.capa}
            alt={post.titulo}
          />
          <h2 className={styles.titulo}>{post.titulo}</h2>
          <BotaoPrincipal>Ler</BotaoPrincipal>
        </div>
      </Link>
    </li>
  )
}
