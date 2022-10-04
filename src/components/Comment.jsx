import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder = {false} src="https://avatars.githubusercontent.com/u/86250539?v=4" alt="" />

      <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Ramonn Rocha</strong>
                <time dateTime='2022-05-11 08:13:00'> Publicado há 1h</time>
              </div>
              <button title="Deletar Comentário">
            <Trash  size={20}/></button>
            </header>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>
          <footer>
            <button> 
            <ThumbsUp />
            Aplaudir<span>20</span>
            </button>
          </footer>
      </div>


    </div>
  )
}