import {graphql} from '@/gql'
 
// The GetPageBySlug query uses the input a slug parameter to retrieve a specific page
export const GET_PAGE_BY_SLUG = graphql(`
    query GetPageBySlug($slug: String) {
        Page(slug: $slug) {
            _id
            title
            _slug
            stack {
                __typename
                ... on SectionImageAndText {
                    ...SectionImageAndTextFragment
                }
                ... on SectionHeader {
                    ...SectionHeaderFragment
                }
            }
        }
    }
`)
 
// A fragment for the image and text section
export const SECTION_IMAGE_AND_TEXT_FRAGMENT = graphql(`
    fragment SectionImageAndTextFragment on SectionImageAndText {
        _context {
            variant_id
            variant_key
        }
        title
        _id
        cta_button {
            ...CTAButtonFragment
        }
        align
    }
`)
 
// A fragment for the image and text section
export const SECTION_HEADER_FRAGMENT = graphql(`
    fragment SectionHeaderFragment on SectionHeader {
        _context {
            variant_id
            group_id
            variant_key
        }
        title
        image {
            url
            caption
        }
        cta_button {
            ...CTAButtonFragment
        }
        _id
    }
 
`)
 
// A fragment for the CTA button
export const CTA_BUTTON_FRAGMENT = graphql(`
    fragment CTAButtonFragment on CTAButton {
        link
        text
        internal_link {
            _slug
        }
    }
`)