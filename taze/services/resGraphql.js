export default async function requestGraphql(query) {
    const url = "http://taze.test/graphql";
    const headers = { 'Content-Type': 'application/json' };

   

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query)
    });

    const resJson = await res.json();
    return resJson;

}