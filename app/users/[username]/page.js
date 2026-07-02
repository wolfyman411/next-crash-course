export default async function page({params}) {

  const { username } = await params

  return (
    <div>
      <h1>This is a user: {username}</h1>
    </div>
  )
}
