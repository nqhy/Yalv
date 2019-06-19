// @flow
import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:8000/graphql' }),
  cache: new InMemoryCache(),
});

export const withApolloProvider = (Component: Node) => () => (
  <ApolloProvider client={client}>
    <Component />
  </ApolloProvider>
);
