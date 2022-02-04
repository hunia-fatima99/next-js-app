import CreateNews from '../../components/CreateNews/createNews';
import Head from 'next/head';
import fireInstance from '../../next.config';


const Home = () => {
    return (
        <div>
            <Head>
                <title>Blog App</title>
            </Head>
            <h1>Blog</h1>
            <CreateNews />
        </div>
    )
}

export default Home