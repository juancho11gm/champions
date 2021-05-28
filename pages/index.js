import { Layout } from '../components/Layout'
import { ListItem } from '../components/ListItem';
import { currentEnv } from '../config/config';

function Home({ list }) {
  return (
    <Layout>
      <ListItem list={list} />
    </Layout>
  )
}

Home.getInitialProps = async () => {
  // server side
  const response = await fetch(currentEnv);
  const list = await response.json();
  return { list };
}

export default Home;
