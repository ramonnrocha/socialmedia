import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react";
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

interface CommentProps {
  content : string;
  onDeleteComment: (comment : string) => void;
}

export function Comment({ content, onDeleteComment } : CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment(){
    setLikeCount(likeCount + 1)
  }

  function handleDeleteComment (){
    onDeleteComment(content);
  }

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
              <button onClick={handleDeleteComment} title="Deletar Comentário">
            <Trash  size={20}/></button>
            </header>
            <p>{content}</p>
          </div>
          <footer>
            <button onClick={handleLikeComment}> 
            <ThumbsUp />
            Aplaudir<span>{likeCount}</span>
            </button>
          </footer>
      </div>


    </div>
  )
}

         