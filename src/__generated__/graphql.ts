/* eslint-disable */
import React from "react";

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

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyUser?: Maybe<Array<Maybe<User>>>;
  createUser?: Maybe<User>;
  removeUser?: Maybe<User>;
  updateUser?: Maybe<User>;
};


export type MutationCreateManyUserArgs = {
  data?: InputMaybe<Array<InputMaybe<UserInput>>>;
};


export type MutationCreateUserArgs = {
  about: Scalars['String'];
  firstname: Scalars['String'];
  img: Scalars['String'];
  lastname: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  about?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  img?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  User?: Maybe<User>;
  _allUsersMeta?: Maybe<ListMetadata>;
  allUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type Query_AllUsersMetaArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryAllUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  about: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['ID'];
  img: Scalars['String'];
  lastname: Scalars['String'];
};

export type UserFilter = {
  about?: InputMaybe<Scalars['String']>;
  about_neq?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  firstname_neq?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  img?: InputMaybe<Scalars['String']>;
  img_neq?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  lastname_neq?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
};

export type UserInput = {
  about: Scalars['String'];
  firstname: Scalars['String'];
  img: Scalars['String'];
  lastname: Scalars['String'];
};

export type UserNameProps = {
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  setFirstnameInput : React.Dispatch<React.SetStateAction<string>>;
  setLastnameInput : React.Dispatch<React.SetStateAction<string>>;
  isUpdateMode: boolean;
}

export interface UploadProps {
  url: string;
  onUploaded: React.Dispatch<React.SetStateAction<string>> ;
  id? : string;
}



export interface AboutProps  extends UploadProps{
  isEditMode : boolean;
  setTextareaInput : React.Dispatch<React.SetStateAction<string>>,
  about: Scalars['String'];
  img: Scalars['String'];
}
