import useSWR from 'swr'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import Person from '../components/Person'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const [session, loading] = useSession()
  const { data, error } = useSWR('/api/people', fetcher)
  console.log(session);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return <>

    {!session && <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email}
      <img src={session.user.image}></img>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <ul>
        {data.map((p, i) => (
          <Person key={i} person={p} />
        ))}
      </ul>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </>
}
