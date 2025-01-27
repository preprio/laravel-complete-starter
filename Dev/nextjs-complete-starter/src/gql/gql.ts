/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n    query GetPageBySlug($slug: String) {\n        Page(slug: $slug) {\n            _id\n            title\n            _slug\n            stack {\n                __typename\n                ... on SectionImageAndText {\n                    ...SectionImageAndTextFragment\n                }\n                ... on SectionHeader {\n                    ...SectionHeaderFragment\n                }\n            }\n        }\n    }\n": types.GetPageBySlugDocument,
    "\n    fragment SectionImageAndTextFragment on SectionImageAndText {\n        _context {\n            variant_id\n            variant_key\n        }\n        title\n        _id\n        cta_button {\n            ...CTAButtonFragment\n        }\n        align\n    }\n": types.SectionImageAndTextFragmentFragmentDoc,
    "\n    fragment SectionHeaderFragment on SectionHeader {\n        _context {\n            variant_id\n            group_id\n            variant_key\n        }\n        title\n        image {\n            url\n            caption\n        }\n        cta_button {\n            ...CTAButtonFragment\n        }\n        _id\n    }\n \n": types.SectionHeaderFragmentFragmentDoc,
    "\n    fragment CTAButtonFragment on CTAButton {\n        link\n        text\n        internal_link {\n            _slug\n        }\n    }\n": types.CtaButtonFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPageBySlug($slug: String) {\n        Page(slug: $slug) {\n            _id\n            title\n            _slug\n            stack {\n                __typename\n                ... on SectionImageAndText {\n                    ...SectionImageAndTextFragment\n                }\n                ... on SectionHeader {\n                    ...SectionHeaderFragment\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetPageBySlug($slug: String) {\n        Page(slug: $slug) {\n            _id\n            title\n            _slug\n            stack {\n                __typename\n                ... on SectionImageAndText {\n                    ...SectionImageAndTextFragment\n                }\n                ... on SectionHeader {\n                    ...SectionHeaderFragment\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment SectionImageAndTextFragment on SectionImageAndText {\n        _context {\n            variant_id\n            variant_key\n        }\n        title\n        _id\n        cta_button {\n            ...CTAButtonFragment\n        }\n        align\n    }\n"): (typeof documents)["\n    fragment SectionImageAndTextFragment on SectionImageAndText {\n        _context {\n            variant_id\n            variant_key\n        }\n        title\n        _id\n        cta_button {\n            ...CTAButtonFragment\n        }\n        align\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment SectionHeaderFragment on SectionHeader {\n        _context {\n            variant_id\n            group_id\n            variant_key\n        }\n        title\n        image {\n            url\n            caption\n        }\n        cta_button {\n            ...CTAButtonFragment\n        }\n        _id\n    }\n \n"): (typeof documents)["\n    fragment SectionHeaderFragment on SectionHeader {\n        _context {\n            variant_id\n            group_id\n            variant_key\n        }\n        title\n        image {\n            url\n            caption\n        }\n        cta_button {\n            ...CTAButtonFragment\n        }\n        _id\n    }\n \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment CTAButtonFragment on CTAButton {\n        link\n        text\n        internal_link {\n            _slug\n        }\n    }\n"): (typeof documents)["\n    fragment CTAButtonFragment on CTAButton {\n        link\n        text\n        internal_link {\n            _slug\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;