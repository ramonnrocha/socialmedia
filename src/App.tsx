
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar.jsx"
import './global.css'

const post = [
  {
    id: 1,
    author : {
      avatarUrl: 'https://github.com/ramonnrocha.png',
      name: 'Ramonn Rocha',
      role: 'Dev Front-end'
    },
    content : [
      { type : 'paragraph', content : 'Fala galeraa 👋'},
      { type : 'paragraph', content : 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type : 'link', content : 'jane.design/doctorcare'},
    ],
    
  },
  {
    id: 2,
    author : {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Dev Education'
    },
    content : [
      { type : 'paragraph', content : 'Fala galeraa 👋'},
      { type : 'paragraph', content : 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type : 'link', content : 'jane.design/doctorcare'},
    ],
    
  }
];



export function App() {
  return (
    <div>

      <Header />
  
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {post.map( post => (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
           />

        ))}
      </main>
     </div>
    </div>
  )
}


