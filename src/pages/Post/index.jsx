import React from 'react'
import { useParams } from 'react-router-dom'
import posts from 'assets/posts.json'
import PostModelo from 'components/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './Post.scss'
import NotFound404 from 'pages/NotFound404';
import PaginaPadrao from 'components/PaginaPadrao';
import Recomendados from 'components/Recomendados';
export default function Post() {

  const parametros = useParams();

  const post = posts.find(p => p.id === Number(parametros.id))

  if (!post) {
    return (
      <NotFound404 />
    )
  }

  return (
    <>
      <PaginaPadrao>
        <PostModelo titulo={post.titulo} fotoCapa={`/assets/posts/${post.id}/capa.png`}>
          <div className='post-markdown-container'>
            <ReactMarkdown>
              {post.texto}
            </ReactMarkdown>
          </div>
          <Recomendados currentid={post.id} />          
        </PostModelo>
      </PaginaPadrao>
    </>
  )
}
