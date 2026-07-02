export default async function Posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()

  return (
    <div>
      <h1>Posts Page</h1>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            {post.title}
          </li>
        )
      })}
    </div>
  )
}
