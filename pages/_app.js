import '../styles/globals.css'

function MyApp({Component, pageProps}) {

    MyApp.getInitialProps = async ({Component, ctx}) => {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps: pageProps};
    }

    return (<Component {...pageProps} />)
}

export default MyApp;
