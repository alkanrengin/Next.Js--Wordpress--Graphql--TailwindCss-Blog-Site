
import Image from "next/image";
import Link from "next/link";

export default function FeaturedImage({ post }) {
    let img = '';

    const defaultFeaturedImage = "http://taze.test/wp-content/uploads/2023/04/2-3-scaled-1-2048x1365.jpg";
    const defaultWidth = "200";
    const defaultHeight = "100";

    if(post.featuredImage) {
        let size = post.featuredImage.node.mediaDetails.sizes[0];
        img = {
            src: size.sourceUrl,
            width: size.width,
            height: size.height
        }
    }
    else {
        img = {
            src: defaultFeaturedImage,
            width: defaultWidth,
            height: defaultHeight
        }
    }

    return (
        <Link href={`/blog/${post.slug}`}>
            <Image src={img.src} width={img.width} height={img.height} alt={post.title} className=" rounded-xl"/>
        </Link>
    )
}