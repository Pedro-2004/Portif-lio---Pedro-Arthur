import './style.css';
import ButtonHead from '@/components/ButtonHead/index';
import Head from '@/components/Head/index';

const Home = () => {
  return (
    <div className='home_container'>
      <Head>
        <ButtonHead title='Projetos' />
      </Head>
    </div>
  );
};
export default Home;
