import {useRouter} from 'next/router'
import { FETCH_PHOTO_URL} from "../../contants/urlEndpoints";
import ImageCard from "../../components/ImageCard/ImageCard";

const Image = (props) => {
    const {image} = props
    return (
        <>
            <ImageCard
                data={image}
            />
            <div>{`Image page with id ${image.id}`}</div>
        </>
    )
}

export async function getServerSideProps(context) {
    const id = context.params.id
    const url = FETCH_PHOTO_URL.replace('{id}', id)
    const responseBody = await fetch(url)
    const responseJson = await responseBody.json()
    return {
        props: {
            image: responseJson || [],
        }
    }
}

export default Image