import { useSession, getSession } from 'next-auth/client'
import Header from '../components/Header';

export default function About () {
    const [session, loading] = useSession()

    if (loading) return null

    if (!loading && !session) return <p>Access Denied</p>

    return (
        <>
            <Header />
            <h1>About...</h1>
            <a href='/'>go back</a>
        </>
    )
}