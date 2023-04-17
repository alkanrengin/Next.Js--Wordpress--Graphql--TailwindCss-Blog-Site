import Head from "next/head";
import  Header  from "../../components/Header";
import Footer from "../../components/Footer";
import Date from "../../components/Date";
import { getSinglePost, getPostSlugs } from "../../services/allPosts";


export async function getStaticProps({ params }) {
    const postData = await getSinglePost(params.postSlug);

    let featuredImageUrl = "http://taze.test/wp-content/uploads/2023/04/2-3-scaled-1-2048x1365.jpg";

    if(postData.featuredImage.node.mediaDetails.sizes[0].sourceUrl) {
        featuredImageUrl = postData.featuredImage.node.mediaDetails.sizes[0].sourceUrl;
    }

    if(!postData) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            postData,
            featuredImageUrl: "url(" + featuredImageUrl + ")",
        },
        notFound: false,
    };
}

export async function getStaticPaths() {
    const postSlugs = await getPostSlugs();

    return {
        paths: postSlugs.map((s) => (
            {
                params: {
                    postSlug: s.slug
                }
            }
        )),
        fallback: 'blocking'
    }
}

export default function Post({ postData, featuredImageUrl }) {
    return (
        <>
        <Head>
            <title key={postData.slug}>{postData.title}</title>
            <meta name="description" content={postData.excerpt} key="metadescription" />
        </Head>
        <section className=" absolute w-full z-20">
            <Header className="header-single-post z-10 relative" />
        </section>
        <article>
            <section className="hero-area h-[60vh] min-h-[30rem] bg-no-repeat bg-cover bg-center relative " style={{backgroundImage: featuredImageUrl}}>
                <div className="absolute inset-0 bg-slate-900 opacity-40"></div>

                <div className="container mx-auto h-full flex flex-col  justify-center lg:max-w-4xl">
                    <h1 className="text-6xl text-center text-slate-100 relative z-10 py-8 mt-12">{postData.title}</h1>

                    <div className="pb-4 text-slate-100 z-10">
                         <Date dateString={postData.modified} />
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: postData.excerpt }} className="relative z-10 text-left text-slate-200 text-2xl pl-4 border-l-4 border-lime-200"/>
                </div>
            </section>
            <section className="content-area py-8">
                <div dangerouslySetInnerHTML={{ __html: postData.content }} className="post-content container lg:max-w-4xl mx-auto"/>
            </section>
        </article>
        
        <Footer />
        </>
    );
}
