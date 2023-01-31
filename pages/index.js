import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import Nav from '../components/Nav';

export const getStaticProps = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return{
      props:{
          data
      }
  }
}

export default function index({data}) {
  
  return (
    <div>
    <Head>
    <meta charset="UTF-8"/>
    <meta name="description" content="Free Web tutorials"/>
    <meta name="keywords" content="HTML, CSS, JavaScript"/>
    <meta name="author" content="John Doe"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Home Page</title>
    </Head>
    <Nav/>
    {data.slice(0, 5).map((item)=>(
      <div className={`${styles.main} ${styles.colors}`}>
      <h1>{item.id}</h1>
      <Link href={`/blog/${item.id}`}>{item.title}</Link>
      </div>
    ))}
    </div>
  )
}
