import { useSession, getSession } from 'next-auth/client'

export default function About() {
    const [ session, loading ] = useSession()

    if (loading) return null
  
    if (!loading && !session) return <p>Access Denied</p>

    return (
        <>
        <h1>About...</h1>
        <a href='/'>go back</a>
        </>
    )
}