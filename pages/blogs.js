import React from 'react'
import Head from 'next/Head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import Script from 'next/script'
import imageUrlBuilder from '@sanity/image-url'
import { useEffect } from "react";
import Link from'next/link';
import Navbar from '../components/Navbar';

const Blogs = ({blogs,profile}) => {
    const client = createClient({
        projectId:'ce8mxe4w',
        dataset:'production',
        useCdn:false
      });
      const builder = imageUrlBuilder(client)
      useEffect(() => {
    
      }, [])
  return (
    <>
    <Head>
      <title>{profile.title} | Blogs</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </Head>
    <Navbar profile={profile}/>
    <div className="bg-grey-50" id="blog">
          <div className="container mx-auto py-32 md:py-205">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              I also like to write
            </h2>
            <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Check out my latest posts!
            </h4>
            <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
              {
                blogs.map((item)=>{
                  return <Link key={item.slug.current} href={"/blog/"+ item.slug.current} className="shadow">
                <div><div style={{"backgroundImage": `url(${builder.image(item.blogimage).url() || '/assets/img/post-01.png'})`}}
                  className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                  <span
                    className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                  <span
                    className="cursor-pointer absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-purple-700 bg-purple-700 px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-200 md:text-base">Read
                    More</span>
                </div>
                <div className="bg-white py-6 px-5 xl:py-8 cursor-pointer">
                  <span className="block font-body text-lg font-semibold text-black">{item.title}</span>
                  <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
                </div></div>
              </Link>
                })
              }
            </div>
          </div>
        </div>
        <a href="#"><button className='hidden fixed text-lg bg-purple-600 text-white cursor-pointer px-[1.1rem] py-[0.85rem] rounded bottom-[20px] right-[30px] z-50 border-none outline-none justify-center items-center' id="blogtotop" title="Go to top" ><ion-icon name="arrow-up-outline"></ion-icon></button></a>
        <script src='/assets/js/blogs.js'></script>
    </>
  )
}
export default Blogs
export async function getServerSideProps(context){
    const client = createClient({
      projectId:'ce8mxe4w',
      dataset:'production',
      useCdn:false
    });
    const query = `*[_type == 'blog']`;
    const blogs = await client.fetch(query);

    const profilequery = `*[_type == 'profile'][0]`;
  const profile = await client.fetch(profilequery);
    return{
      props:{
        blogs,
        profile
      }
    }
  
  
  }
