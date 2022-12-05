export default function RepoList({ userDataR, handleSetUserRepos }) {
  return (
    <section>
      <ol>
        {userDataR.repos?.map(repo => {
          return (
            <div key={repo.id + repo.name}>
              <li key={repo.id}>{repo.name}</li>
              <button
                key={repo.name}
                onClick={() => handleSetUserRepos(repo.name)}
              >
                X
              </button>
            </div>
          )
        })}
      </ol>
    </section>
  )
}
