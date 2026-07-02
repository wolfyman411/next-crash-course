import { collection, getDocs } from "firebase/firestore"
import {db} from "@/app/firebase"
import CreatePost from "../../components/CreatePost"

export default async function Posts() {
  const posts = await getDocs(collection(db,"posts"))
  console.log(posts.docs)

  return (
    <div>
      <h1>Posts Page</h1>
      <CreatePost/>
      {posts.docs.map((post) => {
        return (
          <li key={post.id}>
            {post.data().post}
          </li>
        )
      })}
    </div>
  )
}
