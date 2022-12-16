import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {ApolloProvider} from "@apollo/client";
import client from "./apollo/client"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
