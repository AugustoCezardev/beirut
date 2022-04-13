import Document, {Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (       
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,400&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>
                <link rel="shortcut icon" href="/logo-bg.png" type="image/png"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}