import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { MobileProvider } from "./MobileCheck";
import "../src/App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ApolloProvider client={client}>
      <MobileProvider>
        <Header className={isSticky ? "sticky" : ""} id="myHeader" />
        <main className="d-flex flex-column min-vh-100">
          <div className="flex-grow-1">
            <Outlet />
          </div>
          <Footer />
        </main>
      </MobileProvider>
    </ApolloProvider>
  );
}

export default App;
