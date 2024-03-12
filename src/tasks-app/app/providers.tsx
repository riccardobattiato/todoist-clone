"use client";

import type { ReactNode } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

interface AppProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: AppProvidersProps) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Providers;
