import {useEffect, useState} from "react";
import fireInstance from "../../config/firebase.config";


function Home({news = []}) {
    return (
        <>
            <h1>These are news</h1>
            <ul>
                {news?.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Home;

export async function getStaticProps() {
    // const url = 'https://newsapi.org/v2/everything?q=apple&from=2022-02-03&apiKey=aa9bc2e6d2a24574a96f0f47fae99e84';
    // const responseBody = await fetch(url)
    // const responseJson = await responseBody.json()
    // const news = responseJson.articles || []
    let news = []
    const querySnapshot = await fireInstance
        .firestore()
        .collection('news')
        .get();
    querySnapshot.forEach(function (doc) {
        console.log(doc.data())
        news.push({
            id: doc.id,
            ...doc.data()
        })
    })

    return {
        props: {
            news: news || [],
        },
        revalidate: 60
    }
}