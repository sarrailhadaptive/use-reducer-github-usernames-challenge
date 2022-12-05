export default function Card({ userDataR }) {
  return (
    <section>
      <h1>Username: {userDataR?.username}</h1>
      <img src={userDataR?.avatar} />
      <p>Number of Repositories: {userDataR?.numberRepos} </p>
    </section>
  )
}
