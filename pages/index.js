import { Layout } from '../components/Layout'
import { ListItem } from '../components/ListItem';

function Home({ list }) {
  return (
    <Layout>
      <ListItem list={list} />
    </Layout>
  )
}

Home.getInitialProps = async () => {
  // server side
  const response = await fetch('http://localhost:3000/api/people');
  const list = await response.json();
  return { list };
}

export default Home;
