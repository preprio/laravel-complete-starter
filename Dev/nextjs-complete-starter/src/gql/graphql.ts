/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The DateTime type adheres to ISO 8601 standard. */
  _DateTime: { input: any; output: any; }
};

/** This union type holds all content models. */
export type AllModels = Car | Category | Page | Redirect | SectionCarRecommendations;

/** Prepr Asset system model */
export type Asset = {
  __typename?: 'Asset';
  /** Unique identifier for each asset. */
  _id: Scalars['String']['output'];
  _type: Scalars['String']['output'];
  /** Contextual field; alignment of the asset when used in a content item. */
  alignment?: Maybe<AssetAlignment>;
  author?: Maybe<Scalars['String']['output']>;
  /** Contextual field; caption of the asset when used in a content item. */
  caption?: Maybe<Scalars['String']['output']>;
  /** Returns a cover image for audio/video files. */
  cover?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  mime_type?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  original_name?: Maybe<Scalars['String']['output']>;
  /** Mux Playback ID for Audio & Video assets. */
  playback_id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Prepr Asset system model */
export type AssetCoverArgs = {
  animated?: InputMaybe<Scalars['Boolean']['input']>;
  end?: InputMaybe<Scalars['Float']['input']>;
  fit_mode?: InputMaybe<Scalars['String']['input']>;
  flip_h?: InputMaybe<Scalars['Boolean']['input']>;
  flip_v?: InputMaybe<Scalars['Boolean']['input']>;
  fps?: InputMaybe<Scalars['Int']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Float']['input']>;
  time?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** Prepr Asset system model */
export type AssetUrlArgs = {
  as_file?: InputMaybe<Scalars['Boolean']['input']>;
  crop?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  inline?: InputMaybe<Scalars['Boolean']['input']>;
  preset?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  res?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetAlignment {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

/** CTAButton component. */
export type CtaButton = Component & {
  __typename?: 'CTAButton';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  internal_link: Array<Page>;
  link?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

/** Single Car. */
export type Car = Model & {
  __typename?: 'Car';
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /**
   * Count of clicktrough events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _clicktroughs: Scalars['Int']['output'];
  /**
   * Count of comment events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _comments: Scalars['Int']['output'];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  _last_published_on?: Maybe<Scalars['String']['output']>;
  /** Count of like events. */
  _likes: Scalars['Int']['output'];
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Car>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /**
   * Count of purchase events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _purchases: Scalars['Int']['output'];
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /**
   * Count of share events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _shares: Scalars['Int']['output'];
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  /**
   * Count of vote events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _votes: Scalars['Int']['output'];
  categories: Array<Category>;
  image?: Maybe<Asset>;
  monthly_price?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum CarSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  MonthlyPriceAsc = 'monthly_price_ASC',
  MonthlyPriceDesc = 'monthly_price_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CarWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the Id, Slug, Created On, Changed On, Published On, Text, Integer, Float, Boolean, and DateTime field types, for references only Text, Integer, Float, Boolean and exists (at least one item) fields are supported. */
  _or?: InputMaybe<Array<CarWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Match on Category fields. */
  categories?: InputMaybe<CategoryWhereInput>;
  /** Matches if the field is equal to the given value. */
  monthly_price?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  monthly_price_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  monthly_price_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  monthly_price_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  monthly_price_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  monthly_price_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  title_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of Cars items. */
export type Cars = {
  __typename?: 'Cars';
  items: Array<Car>;
  total: Scalars['Int']['output'];
};

/** Single Category. */
export type Category = Model & {
  __typename?: 'Category';
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /**
   * Count of clicktrough events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _clicktroughs: Scalars['Int']['output'];
  /**
   * Count of comment events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _comments: Scalars['Int']['output'];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  _last_published_on?: Maybe<Scalars['String']['output']>;
  /** Count of like events. */
  _likes: Scalars['Int']['output'];
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Category>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /**
   * Count of purchase events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _purchases: Scalars['Int']['output'];
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /**
   * Count of share events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _shares: Scalars['Int']['output'];
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  /**
   * Count of vote events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _votes: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export enum CategorySortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CategoryWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the Id, Slug, Created On, Changed On, Published On, Text, Integer, Float, Boolean, and DateTime field types, for references only Text, Integer, Float, Boolean and exists (at least one item) fields are supported. */
  _or?: InputMaybe<Array<CategoryWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  title_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of Categorys items. */
export type Categorys = {
  __typename?: 'Categorys';
  items: Array<Category>;
  total: Scalars['Int']['output'];
};

/** A component is a predefined set of fields that can be used in models. You can think of a component as a flexible, reusable template where you define fields once, and then fill them with different content every time you use it. */
export type Component = {
  _context?: Maybe<Context>;
  /** Unique identifier for each content component instance. */
  _id: Scalars['String']['output'];
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<AllModels>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ContentItemsSortInput {
  ChangedOn = 'changed_on',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnDesc = 'created_on_DESC',
  /** Sort content items by most viewed. */
  Popular = 'popular',
  PublishOn = 'publish_on',
  PublishOnDesc = 'publish_on_DESC'
}

export type ContentItemsWhereInput = {
  _channels_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _customer_relation?: InputMaybe<CustomerRelationWhereInput>;
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _stories_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _stories_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _typename_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Context = {
  __typename?: 'Context';
  /** @deprecated Will be removed in the next version. */
  countries?: Maybe<Array<Scalars['String']['output']>>;
  /** The unique identifier for an A/B test or personalization block used for analytics. */
  group_id?: Maybe<Scalars['String']['output']>;
  /** Returns the kind of personalized content: `PERSONALIZATION` | `AB_TEST`. */
  kind?: Maybe<Scalars['String']['output']>;
  segments?: Maybe<Array<Scalars['String']['output']>>;
  /** A variant ID is a unique identifier assigned to each variant in an A/B test (A/B) or personalization and contains the segments it has been linked too. */
  variant_id?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for an A/B test or personalization variant used for analytics. */
  variant_key?: Maybe<Scalars['String']['output']>;
};

/** The Customer Relation type is specifying the kind of relationship between the customer and your content. */
export enum CustomerRelationType {
  Bookmarked = 'BOOKMARKED',
  Clicked = 'CLICKED',
  Commented = 'COMMENTED',
  Liked = 'LIKED',
  Purchased = 'PURCHASED',
  Shared = 'SHARED',
  Subscribed = 'SUBSCRIBED',
  Viewed = 'VIEWED',
  Voted = 'VOTED'
}

export type CustomerRelationWhereInput = {
  _type?: InputMaybe<CustomerRelationType>;
  id?: InputMaybe<Scalars['String']['input']>;
  reference_id?: InputMaybe<Scalars['String']['input']>;
};

/** A model is the content structure of a content item that is used in multiple locations in your CMS. A model consists of a number of fields to store your content. Common examples of models are articles, landing pages and products. */
export type Model = {
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
};

/** Single Page. */
export type Page = Model & {
  __typename?: 'Page';
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /**
   * Count of clicktrough events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _clicktroughs: Scalars['Int']['output'];
  /**
   * Count of comment events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _comments: Scalars['Int']['output'];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  _last_published_on?: Maybe<Scalars['String']['output']>;
  /** Count of like events. */
  _likes: Scalars['Int']['output'];
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Page>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /**
   * Count of purchase events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _purchases: Scalars['Int']['output'];
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /**
   * Count of share events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _shares: Scalars['Int']['output'];
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  /**
   * Count of vote events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _votes: Scalars['Int']['output'];
  stack: Array<Page_Stack>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Single Page. */
export type PageStackArgs = {
  personalize?: Scalars['Boolean']['input'];
  personalize_for_country?: InputMaybe<Scalars['String']['input']>;
  personalize_for_segments?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum PageSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the Id, Slug, Created On, Changed On, Published On, Text, Integer, Float, Boolean, and DateTime field types, for references only Text, Integer, Float, Boolean and exists (at least one item) fields are supported. */
  _or?: InputMaybe<Array<PageWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Match items on ID, Slug or Typename of referenced content items. */
  stack?: InputMaybe<Page_StackWhereInput>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  title_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Page_Stack = SectionAboutLease | SectionBenefits | SectionBlogContent | SectionCarRecommendations | SectionConsultation | SectionFaq | SectionHeader | SectionHowItWorks | SectionHowToGetACar | SectionImageAndText | SectionTestimonials;

export type Page_StackWhereInput = {
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<Scalars['String']['input']>>;
  _slug_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _slug_nany?: InputMaybe<Array<Scalars['String']['input']>>;
  _typename_any?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** List of Pages items. */
export type Pages = {
  __typename?: 'Pages';
  items: Array<Page>;
  total: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single Car. */
  Car?: Maybe<Car>;
  /** Retrieve multiple Cars. */
  Cars?: Maybe<Cars>;
  /** Retrieve a single Category. */
  Category?: Maybe<Category>;
  /** Retrieve multiple Categorys. */
  Categorys?: Maybe<Categorys>;
  /** Retrieve items from different model types at once. */
  ContentItems?: Maybe<ContentItems>;
  /** Retrieve a single Page. */
  Page?: Maybe<Page>;
  /** Retrieve multiple Pages. */
  Pages?: Maybe<Pages>;
  /** Recommendation recipe suitable for recommending Cars which are similar to the giving item */
  PeopleAlsoViewed_Cars?: Maybe<Cars>;
  /** Recommendation recipe suitable for recommending Categorys which are similar to the giving item */
  PeopleAlsoViewed_Categorys?: Maybe<Categorys>;
  /** Recommendation recipe suitable for recommending Pages which are similar to the giving item */
  PeopleAlsoViewed_Pages?: Maybe<Pages>;
  /** Recommendation recipe suitable for recommending Redirects which are similar to the giving item */
  PeopleAlsoViewed_Redirects?: Maybe<Redirects>;
  /** Recommendation recipe suitable for recommending SectionCarRecommendationss which are similar to the giving item */
  PeopleAlsoViewed_SectionCarRecommendationss?: Maybe<SectionCarRecommendationss>;
  /** Recommendation recipe suitable for recommending globally popular Cars */
  Popular_Cars?: Maybe<Cars>;
  /** Recommendation recipe suitable for recommending globally popular Categorys */
  Popular_Categorys?: Maybe<Categorys>;
  /** Recommendation recipe suitable for recommending globally popular Pages */
  Popular_Pages?: Maybe<Pages>;
  /** Recommendation recipe suitable for recommending globally popular Redirects */
  Popular_Redirects?: Maybe<Redirects>;
  /** Recommendation recipe suitable for recommending globally popular SectionCarRecommendationss */
  Popular_SectionCarRecommendationss?: Maybe<SectionCarRecommendationss>;
  /** Retrieve a single Redirect. */
  Redirect?: Maybe<Redirect>;
  /** Retrieve multiple Redirects. */
  Redirects?: Maybe<Redirects>;
  /** Retrieve a single SectionCarRecommendations. */
  SectionCarRecommendations?: Maybe<SectionCarRecommendations>;
  /** Retrieve multiple SectionCarRecommendationss. */
  SectionCarRecommendationss?: Maybe<SectionCarRecommendationss>;
  /** Recommendation recipe suitable for recommending Cars which are similar to the giving item */
  Similar_Cars?: Maybe<Cars>;
  /** Recommendation recipe suitable for recommending Categorys which are similar to the giving item */
  Similar_Categorys?: Maybe<Categorys>;
  /** Recommendation recipe suitable for recommending Pages which are similar to the giving item */
  Similar_Pages?: Maybe<Pages>;
  /** Recommendation recipe suitable for recommending Redirects which are similar to the giving item */
  Similar_Redirects?: Maybe<Redirects>;
  /** Recommendation recipe suitable for recommending SectionCarRecommendationss which are similar to the giving item */
  Similar_SectionCarRecommendationss?: Maybe<SectionCarRecommendationss>;
};


export type QueryCarArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCarsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CarSortInput>;
  where?: InputMaybe<CarWhereInput>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategorysArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CategorySortInput>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryContentItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  people_also_viewed_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentItemsSortInput>;
  where?: InputMaybe<ContentItemsWhereInput>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<PageSortInput>;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPeopleAlsoViewed_CarsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CarWhereInput>;
};


export type QueryPeopleAlsoViewed_CategorysArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryPeopleAlsoViewed_PagesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPeopleAlsoViewed_RedirectsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RedirectWhereInput>;
};


export type QueryPeopleAlsoViewed_SectionCarRecommendationssArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionCarRecommendationsWhereInput>;
};


export type QueryPopular_CarsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CarWhereInput>;
};


export type QueryPopular_CategorysArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryPopular_PagesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPopular_RedirectsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RedirectWhereInput>;
};


export type QueryPopular_SectionCarRecommendationssArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionCarRecommendationsWhereInput>;
};


export type QueryRedirectArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRedirectsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<RedirectSortInput>;
  where?: InputMaybe<RedirectWhereInput>;
};


export type QuerySectionCarRecommendationsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySectionCarRecommendationssArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SectionCarRecommendationsSortInput>;
  where?: InputMaybe<SectionCarRecommendationsWhereInput>;
};


export type QuerySimilar_CarsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CarWhereInput>;
};


export type QuerySimilar_CategorysArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QuerySimilar_PagesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type QuerySimilar_RedirectsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RedirectWhereInput>;
};


export type QuerySimilar_SectionCarRecommendationssArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionCarRecommendationsWhereInput>;
};

/** Single Redirect. */
export type Redirect = Model & {
  __typename?: 'Redirect';
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /**
   * Count of clicktrough events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _clicktroughs: Scalars['Int']['output'];
  /**
   * Count of comment events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _comments: Scalars['Int']['output'];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  _last_published_on?: Maybe<Scalars['String']['output']>;
  /** Count of like events. */
  _likes: Scalars['Int']['output'];
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Redirect>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /**
   * Count of purchase events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _purchases: Scalars['Int']['output'];
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /**
   * Count of share events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _shares: Scalars['Int']['output'];
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  /**
   * Count of vote events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _votes: Scalars['Int']['output'];
  destination: Array<Page>;
  redirect_type?: Maybe<Scalars['Boolean']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};

export enum RedirectSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  SourceAsc = 'source_ASC',
  SourceDesc = 'source_DESC'
}

export type RedirectWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the Id, Slug, Created On, Changed On, Published On, Text, Integer, Float, Boolean, and DateTime field types, for references only Text, Integer, Float, Boolean and exists (at least one item) fields are supported. */
  _or?: InputMaybe<Array<RedirectWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Match on Page fields. */
  destination?: InputMaybe<PageWhereInput>;
  /** Matches if the field is equal to the given value. */
  redirect_type?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the field is equal to the given value. */
  source?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  source_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  source_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  source_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  source_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  source_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of Redirects items. */
export type Redirects = {
  __typename?: 'Redirects';
  items: Array<Redirect>;
  total: Scalars['Int']['output'];
};

export type SearchOptionsInput = {
  includeNumeric?: InputMaybe<Scalars['Boolean']['input']>;
  includeReferences?: InputMaybe<Scalars['Boolean']['input']>;
};

/** SectionAboutLease component. */
export type SectionAboutLease = Component & {
  __typename?: 'SectionAboutLease';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

/** SectionBenefits component. */
export type SectionBenefits = Component & {
  __typename?: 'SectionBenefits';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

/** SectionBlogContent component. */
export type SectionBlogContent = Component & {
  __typename?: 'SectionBlogContent';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
};

/** Single SectionCarRecommendations. */
export type SectionCarRecommendations = Model & {
  __typename?: 'SectionCarRecommendations';
  /** Count of bookmark events. */
  _bookmarks: Scalars['Int']['output'];
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /**
   * Count of clicktrough events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _clicktroughs: Scalars['Int']['output'];
  /**
   * Count of comment events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _comments: Scalars['Int']['output'];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  _last_published_on?: Maybe<Scalars['String']['output']>;
  /** Count of like events. */
  _likes: Scalars['Int']['output'];
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<SectionCarRecommendations>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /**
   * Count of purchase events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _purchases: Scalars['Int']['output'];
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /**
   * Count of share events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _shares: Scalars['Int']['output'];
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes: Scalars['Int']['output'];
  /** Count of view events. */
  _views: Scalars['Int']['output'];
  /**
   * Count of vote events.
   * @deprecated Will be removed in next version, use _event instead.
   */
  _votes: Scalars['Int']['output'];
  cars: Array<Car>;
  cta_button?: Maybe<CtaButton>;
  heading?: Maybe<Scalars['String']['output']>;
  internal_title?: Maybe<Scalars['String']['output']>;
};


/** Single SectionCarRecommendations. */
export type SectionCarRecommendationsCarsArgs = {
  personalize?: Scalars['Boolean']['input'];
  personalize_for_country?: InputMaybe<Scalars['String']['input']>;
  personalize_for_segments?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum SectionCarRecommendationsSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internal_title_ASC',
  InternalTitleDesc = 'internal_title_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC'
}

export type SectionCarRecommendationsWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the Id, Slug, Created On, Changed On, Published On, Text, Integer, Float, Boolean, and DateTime field types, for references only Text, Integer, Float, Boolean and exists (at least one item) fields are supported. */
  _or?: InputMaybe<Array<SectionCarRecommendationsWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_gte?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lte?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Match on Car fields. */
  cars?: InputMaybe<CarWhereInput>;
  /** Matches if the field is equal to the given value. */
  heading?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  heading_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  internal_title?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field matches any of the given values. */
  internal_title_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Full fuzzy text search, not case sensitive. */
  internal_title_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  internal_title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  internal_title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  internal_title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of SectionCarRecommendationss items. */
export type SectionCarRecommendationss = {
  __typename?: 'SectionCarRecommendationss';
  items: Array<SectionCarRecommendations>;
  total: Scalars['Int']['output'];
};

/** SectionConsultation component. */
export type SectionConsultation = Component & {
  __typename?: 'SectionConsultation';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
};

/** SectionFaq component. */
export type SectionFaq = Component & {
  __typename?: 'SectionFaq';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

/** SectionHeader component. */
export type SectionHeader = Component & {
  __typename?: 'SectionHeader';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  cta_button?: Maybe<CtaButton>;
  image?: Maybe<Asset>;
  title?: Maybe<Scalars['String']['output']>;
};

/** SectionHowItWorks component. */
export type SectionHowItWorks = Component & {
  __typename?: 'SectionHowItWorks';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

/** SectionHowToGetACar component. */
export type SectionHowToGetACar = Component & {
  __typename?: 'SectionHowToGetACar';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
};

/** SectionImageAndText component. */
export type SectionImageAndText = Component & {
  __typename?: 'SectionImageAndText';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  align?: Maybe<Scalars['String']['output']>;
  cta_button?: Maybe<CtaButton>;
  title?: Maybe<Scalars['String']['output']>;
};

/** SectionTestimonials component. */
export type SectionTestimonials = Component & {
  __typename?: 'SectionTestimonials';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
};

export type SimilarRulesInput = {
  /** Adjust the weight of AI generated entities in the recommendation algorithm. */
  entities?: InputMaybe<Scalars['Float']['input']>;
  /** Adjust the weight of content references in the recommendation algorithm. */
  references?: InputMaybe<Scalars['Float']['input']>;
  /** Adjust the weight of tags in the recommendation algorithm. */
  tags?: InputMaybe<Scalars['Float']['input']>;
};

/** Event type is specifying the kind of event the customer has with your content. */
export enum _Event {
  Bookmark = 'Bookmark',
  Clickthrough = 'Clickthrough',
  Comment = 'Comment',
  Like = 'Like',
  Purchase = 'Purchase',
  Share = 'Share',
  Subscribe = 'Subscribe',
  View = 'View',
  Vote = 'Vote'
}

export type GetPageBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPageBySlugQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', _id: string, title?: string | null, _slug?: string | null, stack: Array<{ __typename: 'SectionAboutLease' } | { __typename: 'SectionBenefits' } | { __typename: 'SectionBlogContent' } | { __typename: 'SectionCarRecommendations' } | { __typename: 'SectionConsultation' } | { __typename: 'SectionFaq' } | (
      { __typename: 'SectionHeader' }
      & { ' $fragmentRefs'?: { 'SectionHeaderFragmentFragment': SectionHeaderFragmentFragment } }
    ) | { __typename: 'SectionHowItWorks' } | { __typename: 'SectionHowToGetACar' } | (
      { __typename: 'SectionImageAndText' }
      & { ' $fragmentRefs'?: { 'SectionImageAndTextFragmentFragment': SectionImageAndTextFragmentFragment } }
    ) | { __typename: 'SectionTestimonials' }> } | null };

export type SectionImageAndTextFragmentFragment = { __typename?: 'SectionImageAndText', title?: string | null, _id: string, align?: string | null, _context?: { __typename?: 'Context', variant_id?: string | null, variant_key?: string | null } | null, cta_button?: (
    { __typename?: 'CTAButton' }
    & { ' $fragmentRefs'?: { 'CtaButtonFragmentFragment': CtaButtonFragmentFragment } }
  ) | null } & { ' $fragmentName'?: 'SectionImageAndTextFragmentFragment' };

export type SectionHeaderFragmentFragment = { __typename?: 'SectionHeader', title?: string | null, _id: string, _context?: { __typename?: 'Context', variant_id?: string | null, group_id?: string | null, variant_key?: string | null } | null, image?: { __typename?: 'Asset', url?: string | null, caption?: string | null } | null, cta_button?: (
    { __typename?: 'CTAButton' }
    & { ' $fragmentRefs'?: { 'CtaButtonFragmentFragment': CtaButtonFragmentFragment } }
  ) | null } & { ' $fragmentName'?: 'SectionHeaderFragmentFragment' };

export type CtaButtonFragmentFragment = { __typename?: 'CTAButton', link?: string | null, text?: string | null, internal_link: Array<{ __typename?: 'Page', _slug?: string | null }> } & { ' $fragmentName'?: 'CtaButtonFragmentFragment' };

export const CtaButtonFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"internal_link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_slug"}}]}}]}}]} as unknown as DocumentNode<CtaButtonFragmentFragment, unknown>;
export const SectionImageAndTextFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionImageAndTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SectionImageAndText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_context"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variant_id"}},{"kind":"Field","name":{"kind":"Name","value":"variant_key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"cta_button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAButtonFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"internal_link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_slug"}}]}}]}}]} as unknown as DocumentNode<SectionImageAndTextFragmentFragment, unknown>;
export const SectionHeaderFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionHeaderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SectionHeader"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_context"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variant_id"}},{"kind":"Field","name":{"kind":"Name","value":"group_id"}},{"kind":"Field","name":{"kind":"Name","value":"variant_key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cta_button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAButtonFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"internal_link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_slug"}}]}}]}}]} as unknown as DocumentNode<SectionHeaderFragmentFragment, unknown>;
export const GetPageBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_slug"}},{"kind":"Field","name":{"kind":"Name","value":"stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SectionImageAndText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SectionImageAndTextFragment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SectionHeader"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SectionHeaderFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAButtonFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"internal_link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionImageAndTextFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SectionImageAndText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_context"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variant_id"}},{"kind":"Field","name":{"kind":"Name","value":"variant_key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"cta_button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAButtonFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"align"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SectionHeaderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SectionHeader"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_context"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variant_id"}},{"kind":"Field","name":{"kind":"Name","value":"group_id"}},{"kind":"Field","name":{"kind":"Name","value":"variant_key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cta_button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAButtonFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]} as unknown as DocumentNode<GetPageBySlugQuery, GetPageBySlugQueryVariables>;