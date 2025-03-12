import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from "./components/homePage"
import QuerySuperHeroes from "./components/querySuperHeroes";
import SuperHeroesPage from './components/superHeroPage';
import TodoApp  from "./Todo/app.js";

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <QuerySuperHeroes /> */}
      {/* <SuperHeroesPage /> */}
      {/*  <HomePage /> */}
      <TodoApp/>
      

    </QueryClientProvider>

  );
}

export default App;
