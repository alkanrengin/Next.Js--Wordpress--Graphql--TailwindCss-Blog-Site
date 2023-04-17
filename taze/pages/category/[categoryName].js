import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import FeaturedImage from "../../components/FeaturedImage";
import  Header  from "../../components/Header";
import Footer from "../../components/Footer";
import Date from "../../components/Date";
import { getCategoryDetails, getCategorySlugs, getPosts } from "../../services/allPosts";
import { useState } from "react";

export async function getStaticPaths() {
    const categories = await getCategorySlugs();

    return {
        paths: categories.map((category) => (
            {
                params: {
                    categoryName: category.slug
                }
            }
        )),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const categoryPosts = await getPosts(null, {key: "categoryName", value: params.categoryName});

    const categoryDetails = await getCategoryDetails(params.categoryName);

    return {
        props: {
            categoryPosts: categoryPosts,
            categoryDetails: categoryDetails,
        }
    }
}

export default function CategoryArchive({ categoryPosts, categoryDetails }) {
    const [posts, setPosts] = useState(categoryPosts);

    return (
        <>
        <Head>
            <title>{categoryDetails.name}</title>
        </Head>
        <div className="h-[50vh] min-h-[20rem] bg-[url('/back.jpg')] relative">
            <div className="absolute bg-slate-900 opacity-40 inset-0 z-0"></div>

            <Header className="header-category z-10 relative" />

            <h1 className="text-4xl text-center text-slate-100 relative z-10 py-8">
                Kategori: {categoryDetails.name}
            </h1>
        </div>
        <main>
            <section className="post-list mt-4">
                <div className="container mx-auto lg:max-w-5xl">
                <ul>
                    {
                        posts.nodes.map((post) => (
                            <li key={post.slug} className="grid  gap-4 mb-4">
                                 <div className="bg-white shadow-lg rounded-lg p-0 lg:p-6 pb-12 mb-4">
                                        <div className=" overflow-hidden object-cover pb-150 mb-6">
                                          <center><FeaturedImage post={post} className="object-top absolute h-80  object-cover lg:rounded-lg" /></center>
                                        </div>

                                         <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                                             <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                         </h1>
                                        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                                            <div className="font-medium text-gray-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                 </svg>
                                                 <span className="align-middle"><Date dateString={post.date} /></span>
                                            </div>
                                        </div>
                                        <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
                                            {post.excerpt}
                                        </p>
                                        
                                         <div className="text-center">
                                             <Link href={`/blog/${post.slug}`} >
                                                 <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Devamını Oku</span>
                                             </Link>
                                         </div>
                                         
                                         
                                     </div>
                               
                            </li>
                        ))
                    }
                </ul>
                </div>
            </section>
        </main>
        </>
    );
}