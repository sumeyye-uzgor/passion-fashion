import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Card } from 'react-bootstrap'

export default function Contact() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Hello Contact</h1>
                <Card bg="success">
                    <Card.Title>Hello World</Card.Title>
                    <Card.Text>ME From Devs</Card.Text>
                </Card>
            </main>


        </div>
    )
}
