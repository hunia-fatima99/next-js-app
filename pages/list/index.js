import styles from './list.module.scss'
import {BASE_URL, RECORDS_PER_PAGE} from '../../contants/urlEndpoints'
import ImageCard from "../../components/ImageCard/ImageCard";
import Head from 'next/head'

function List(props) {
    return (
        <div>
            <Head>
                <title>Pretty Images</title>
                <meta name={'keywords'} content={'images, wallpapers, recent images'}/>
            </Head>
            <h1>These are Images</h1>
            <div className={styles.imageList}>
                {props?.images?.map(image => {
                    return (
                        <ImageCard
                            key={image.id}
                            data={image}/>
                    )
                })
                }
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const url = `${BASE_URL}&page=1&per_page=${RECORDS_PER_PAGE}`;
    const responseBody = await fetch(url)
    const responseJson = await responseBody.json()
    return {
        props: {
            images: responseJson || [],
        }
    }
}

export default List