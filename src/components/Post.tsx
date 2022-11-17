import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, useState } from "react"

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content{
  type : 'paragraph' | 'link',
  content: string
}

interface PostProps {
  author : Author;
  content: Content[];
}

export function Post( { author, content } : PostProps){

  const [comments, setComments] = useState([''])

  const [ newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommnetChange(event: ChangeEvent<HTMLTextAreaElement>){
    setNewCommentText(event.target.value)

  }

  function onDeleteComment(commentToDelete: string){
    const commentsWhithoutDeletedOne = comments.filter(comment => {
      return comment != commentToDelete;
    })

    setComments(commentsWhithoutDeletedOne)
  }

  function handlwNewCommentChange(event : ChangeEvent<HTMLTextAreaElement>){
    setNewCommentText(event.target.value);
  }


  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header >
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de maior as 8:13h" dateTime="2022-05-11 08:00:00">Publicado a 1 hr</time>
     </header>
    <div className={styles.content}>
        {content.map( line => {
          if ( line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if ( line.type === 'link') {
            return <p key={line.content}><a href="">{line.content}</a></p>;
          }
        })}
    </div>

    <footer className={styles.feedback}>
        <h4>Deixe seu feedback</h4>
        <form onSubmit={handleCreateNewComment} action="">
          <textarea 
            value={newCommentText} 
            name="comment"
            onChange={handlwNewCommentChange} 
            required
            placeholder="Deixe um comentário" 
          />
          <button className={styles.button} type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </form>
    </footer>

    <div >
        
         {comments.map( comment => {
          return <Comment key={comment} content={comment} onDeleteComment = {onDeleteComment} />
         })}

      </div> 
    </article>
  )
}