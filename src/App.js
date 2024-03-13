import React from 'react';
import { QueryClientProvider, QueryClient, QueryClient } from 'react-query';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from "./components/homePage"
import QuerySuperHeroes from "./components/querySuperHeroes";
import SuperHeroesPage from './components/superHeroPage';

const queryClient= new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    {/* <QuerySuperHeroes /> */}
      <SuperHeroesPage />
    {/*  <HomePage /> */}
      </QueryClientProvider>

      );
}

   export default App;
