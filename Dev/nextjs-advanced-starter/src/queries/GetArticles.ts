import {graphql} from '@/gql'

export const ARTICLES = graphql(`
    query GetArticles {
        Articles {
            items {
                _id
                _slug
                title
            }
        }
    }
`)


