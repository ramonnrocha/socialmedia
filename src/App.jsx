import { Header} from "./components/Header"
import { Post} from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from './App.module.css'

import "./global.css"

// author : { avatar_url : "", name : "", role: ""}
// publishedAt : Date
// content : String

const posts = [
  {
    id : 1,
    author : {
      avatarUrl : "https://github.com/ramonnrocha.png",
      name: "Ramonn Rocha",
      role: "Developer Junior"
    },
    content : [
      { type : "paragraph", content : "Fala galeraa 👋"},
      { type : "paragraph", content : "Acabei de subir mais um projeto no meu portifa. É um projeto que </p>fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type : "paragraph", content : "jane.design/doctorcare"},
    ],
    publishedAt : new Date("2022-10-4 10:00:00 ")
  },
  {
    id : 2,
    author : {
      avatarUrl : "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Teacher Developer"
    },
    content : [
      { type : "paragraph", content : "Fala galeraa 👋"},
      { type : "paragraph", content : "Acabei de subir mais um projeto no meu portifa. É um projeto que </p>fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type : "link", content : "jane.design/doctorcare"},
    ],
    publishedAt : new Date("2022-10-4 11:00:00 ")
  },
];

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper} >
        <Sidebar />
        <main>
          {posts.map(posts => {
             return (
                <Post
                 author={posts.author}
                 content={posts.content}
                 publishedAt={posts.content}
                />
              )
          })}
        </main>
      </div>
    </div>
  )
}

export default App


