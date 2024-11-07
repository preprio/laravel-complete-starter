import {getClient} from "@/ApolloClient";
import {GetArticlesDocument, GetArticlesQuery} from "@/gql/graphql";
import {notFound} from "next/navigation";

async function getData() {
    const {data} = await getClient().query<GetArticlesQuery>({
        query: GetArticlesDocument,
        fetchPolicy: 'no-cache',
    })

    if (!data) {
        return notFound()
    }

    return data.Articles?.items;
}

export default async function Page({params}: { params: { slug: string | string[] } }) {
    let {slug} = params

    if (!slug) {
        slug = '/'
    }

    if (slug instanceof Array) {
        slug = slug.join('/')
    }

    const articles = await getData();

    return (
        <div>
            <h1>My blog site</h1>
            <ul>
                {articles?.map((article) => (
 
          // Display a list of the fetched articles
                <li key={article._id}>
                    {article.title}
                </li>
                ))}
            </ul>
  
        </div>
    );
}
