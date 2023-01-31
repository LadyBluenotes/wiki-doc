import Head from 'next/head';

export default function HeadComponent({ title, description }: any) {

    return (
        <Head>
            <title>Sarah's Documentation Site</title>
            <meta name="description" content={'A personal site to display project documentation.'} />
            <link href="/dist/output.css" rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}