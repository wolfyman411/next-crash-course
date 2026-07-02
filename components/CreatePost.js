import { db } from "@/app/firebase"
import { addDoc, collection } from "firebase/firestore"
import { revalidatePath } from "next/cache"

export default function CreatePost() {

  async function addPost(formData) {
    "use server"
    const post = formData.get("post")
    await addDoc(collection(db, "posts"), {
      post: post
    })

    revalidatePath("/posts")
  }

  return (
    <div>
      <h1 className='font-bold text-xl'>Create Post</h1>
      <form action={addPost}>
        <textarea
        name="post"
        className='border border-black bg-white text-black w-[400px] h-[80px] resize-none' />
        <br/>
        <button className='p-3 bg-pink-400 text-white w-full'>Post</button>
      </form>
    </div>
  )
}
