import Head from 'next/head';
import { HeadComponentProps } from '../types/types';

export default function HeadComponent({ title, description }: HeadComponentProps) {

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link href="/dist/output.css" rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}