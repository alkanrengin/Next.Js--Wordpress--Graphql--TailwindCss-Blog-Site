import requestGraphql from "./resGraphql"; 
export async function getPageSlugs() {
    const query = {
        query: `query getPageSlugs {
            pages {
              nodes {
                slug
              }
            }
          }`
    };

    const resJson = await requestGraphql(query);
    const slugs = resJson.data.pages.nodes;
    return slugs;
}

export async function getSinglePage(slug) {
    const query = {
        query: `query getSinglePage {
            pages(where: {name: "${slug}"}) {
              nodes {
                content(format: RENDERED)
                date
                modified
                slug
                title(format: RENDERED)
              }
            }
          }`
    };

    const resJson = await requestGraphql(query);
    const pageData = resJson.data.pages.nodes[0];
    return pageData;
}