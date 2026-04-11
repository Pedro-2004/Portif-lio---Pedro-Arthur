import './style.css';
import ButtonHead from '@/components/ButtonHead/index';
import Head from '@/components/Head/index';
import PhotoCard from '@/components/photoCard/index';
const Home = () => {
  return (
    <>
      <Head>
        <ButtonHead title='Projetos' />
        <ButtonHead title='contatos' />
      </Head>
      <div className='home-content'>
        <PhotoCard />
      </div>
    </>
  );
};
export default Home;
