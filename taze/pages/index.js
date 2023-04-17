import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";

export default function Home({posts}) {
  console.log({posts});
    return (
        <>
        <Head>
            <title key="pagetitle">Tazee Blog</title>
            <meta name="description" content="" key="metadescription" />
        </Head>
        <div className="min-h-screen bg-[url('/back.jpg')] relative">
            <div className="absolute bg-slate-900 inset-0 z-0 opacity-40"></div>
            <Header className="z-10 relative" />
            <main>
                <div className="min-h-[50vh] flex flex-col items-center justify-center z-10 relative">
                    <h1 className="text-6xl text-center text-slate-100">Öğrenmeye <span className="text-yellow-400">Şaşırmaya</span> Hoş Geldin!</h1>
                    <div className="mt-20">
                        <Link href="/blog" className="text-2xl text-slate-100 border-slate-100 border-2 rounded-md py-3 px-4 hover:bg-yellow-300 hover:text-slate-800 hover:border-yellow-300 transition">Bloğa Git</Link>
                    </div>
                </div>
            </main>
        </div>
        </>
    );
}

