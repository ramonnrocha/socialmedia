import { Comment} from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'

export function Post () {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar  src="https://github.com/ramonnrocha.png" />
          <div className={styles.authorInfo}>
            <strong>Ramonn Rocha</strong>
            <span>Developer Junior</span>
          </div>

        </div>
        <time dateTime='2022-05-11 08:13:00'> Publicado há 1h</time>
      </header>
      <div className={styles.content}>
      <p>Fala galeraa 👋</p>

      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que </p>fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀

      <a>jane.design/doctorcare</a>

      <p>#novoprojeto #nlw #rocketseat</p>
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