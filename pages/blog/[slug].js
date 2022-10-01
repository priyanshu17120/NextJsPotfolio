import { useRouter } from 'next/router'
import Head from 'next/Head'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import Navbar from '../../components/Navbar';
import imageUrlBuilder from '@sanity/image-url'
import Script from 'next/script';


const Post = ({ blog, profile }) => {
    const client = createClient({
        projectId: 'ce8mxe4w',
        dataset: 'production',
        useCdn: false
    });
    const builder = imageUrlBuilder(client)
    console.log(blog.createdat);
    return <>
        <Head>
            <meta charset="utf-8" />

            <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

            <meta
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
                name="viewport"
            />

            <title>{blog.title}</title>

            <meta property="og:title" content="How to become a frontend developer | Atom Template" />

            <meta property="og:locale" content="en_US" />

            <link
                rel="canonical"
                href="//post"
            />

            <meta
                property="og:url"
                content="//post"
            />

            <meta
                name="description"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            {/* <link rel="icon" type="image/png" href="/assets/img/favicon.png" /> */}
            <link rel="icon" type="image/png" href="/favicon.png" />
            <meta name="theme-color" content="#5540af" />

            <meta property="og:site_name" content="Atom Template" />

            <meta property="og:image" content="//assets/img/social.jpg" />

            <meta name="twitter:card" content="summary_large_image" />

            <meta name="twitter:site" content="@tailwindmade" />
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <link
                crossorigin="crossorigin"
                href="https://fonts.gstatic.com"
                rel="preconnect"
            />

            <link
                as="style"
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
                rel="preload"
            />

            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

            <link
                href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
                rel="stylesheet"
            />

            <link
                crossorigin="anonymous"
                href="/assets/styles/main.min.css"
                media="screen"
                rel="stylesheet"
            />

            <script
                defer
                src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
            ></script>

            <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>



            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
            />

            <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"></script>

        </Head>
        <div>
            <Navbar profile={profile} />

            <div>
                <div className="container py-6 py-28">
                    <div className="mx-auto max-w-4xl">
                        <div className="">
                            <div className='flex justify-start items-center'>
                                <span className='mr-6'>
                                    <img src={builder.image(blog.blogimage).url()}
                                        className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                                        alt="author image" />
                                </span><h1
                                    className=" font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                                    {blog.title}
                                </h1>
                            </div>
                            <div className="flex items-center pt-5">

                                <div className="pl-1">
                                    <span className="block font-body text-xl font-bold text-grey-10">{blog.authorname}</span>
                                    <span className="block pt-1 font-body text-xl font-bold text-grey-30">{blog.createdat}</span>
                                </div>
                            </div>
                        </div>
                        <hr className='h-[3px] bg-[#5540af]'/>
                        <div className="prose max-w-none">
                            <PortableText content={blog.content} projectId='ce8mxe4w' dataset='production' />
                        </div>
                        <div
                            className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                            <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                                <img src={builder.image(blog.authorimage).url()} className="rounded-full shadow" alt={`${blog.authorname}`} />
                            </div>
                            <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                                <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                                    {blog.authorname}
                                </h3>
                                <p
                                    className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                                    {blog.aboutauthor}

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-primary">
        <div className="container flex flex-col items-center justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            {profile.footertext}
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <a href={profile.instalink} className="pl-4">
              <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
            </a>
          </div>
        </div>
      </div>

        </div>
        <a href="#"><button className='hidden fixed text-lg bg-purple-600 text-white cursor-pointer px-[1.1rem] py-[0.85rem] rounded bottom-[20px] right-[30px] z-50 border-none outline-none justify-center items-center' id="slugtotop" title="Go to top" ><ion-icon name="arrow-up-outline"></ion-icon></button></a>
<Script src='/assets/js/slug.js' />
    </>
}

export default Post

export const getServerSideProps = async (context) => {
    const { slug } = context.query;
    const client = createClient({
        projectId: 'ce8mxe4w',
        dataset: 'production',
        useCdn: false
    });
    const query = `*[_type == 'blog' && slug.current == '${slug}'][0]`;
    const blog = await client.fetch(query);    
    const profilequery = `*[_type == 'profile'][0]`;
    const profile = await client.fetch(profilequery);
    return {
        props: {
            blog, profile
        }
    }
}