export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CurrentJob = {
  __typename?: 'CurrentJob';
  name: Scalars['String'];
  position: Scalars['String'];
};

export type DataJson = {
  __typename?: 'DataJson';
  jobs: Job;
  sns: Array<Sns>;
};

export type HistoryJob = {
  __typename?: 'HistoryJob';
  name: Scalars['String'];
  position: Scalars['String'];
};

export type Job = {
  __typename?: 'Job';
  current: Array<CurrentJob>;
  history: Array<HistoryJob>;
};

export type Sns = {
  __typename?: 'SNS';
  color: Scalars['String'];
  name: Scalars['String'];
  service: Scalars['String'];
  url: Scalars['String'];
};
