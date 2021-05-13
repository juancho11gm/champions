import useSWR from 'swr'
import Layout from '../components/Layout'
import { ListItem } from '../components/ListItem';

const fetcher = (url) => fetch(url).then((res) => res.json())

function Home () {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <ListItem list={data} />
    </Layout>
  )
}

export default Home;
