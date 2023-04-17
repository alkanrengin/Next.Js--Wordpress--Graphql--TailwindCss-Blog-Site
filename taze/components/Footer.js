import Link from "next/link";

export default function Footer() {
    return (
        <>
        <footer id="site-footer" className="bg-slate-200">
            <div className="flex justify-between items-center container mx-auto lg:max-w-5xl">
                <div className="py-3">&copy; by Rengin ALKAN</div>
                <ul className="flex [&>li>a]:px-2">
                    <li>
                        <Link href="/hakkimizda">Hakkımızda</Link> 
                    </li>
                    <li>
                        <Link href="/iletisim">İletişim</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
            
        </footer>
        </>
    )
}