
import { Comment} from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'



export function Post ({ author, publishedAt, content }) {


  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar  src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}r</span>
          </div>

        </div>
        <time  title = "04 de outubro 2022"dateTime='2022-05-11 08:13:00'>Publicado á 1h</time>
      </header>
      <div className={styles.content}>
        {content.map( line => {
          if (line.type == 'paragraph') {
            return <p>{line.content}</p>
          } else if ( line.type == 'link'){
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <div className={styles.feedback}>
        <strong>Deixe seu FeedBack</strong>
        <form action="#>" method=""/>
          <textarea name="feedback" id="" placeholder="Escreva um comentário..."></textarea>
          <footer>
           <button className={styles.button} type='submit'> Publicar</button>
          </footer>
      </div>

      <div className={styles.commentList}></div>
        <Comment />
        <Comment />
        <Comment />
    </article>
  )
}