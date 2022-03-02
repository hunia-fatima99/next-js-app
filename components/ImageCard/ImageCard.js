import styles from './image-card.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineHeart} from 'react-icons/ai'

function ImageCard(props) {
    const {data} = props
    return (
        <Link href={'/image/[id]'} as={`/image/${data?.id}`}>
            <div className={styles.imageCard}>
                <Image
                    src={data?.urls?.regular}
                    alt="Picture of the author"
                    width={400}
                    height={400}
                    // blurDataURL="data:..."
                    // placeholder="blur" // Optional blur-up while loading
                />
                <div className={styles.imageContent}>
                    <div onClick={props.likeImage}><AiOutlineHeart/></div>
                    <span>{data?.likes}</span>
                </div>
            </div>
        </Link>
    )
}

export default ImageCard;