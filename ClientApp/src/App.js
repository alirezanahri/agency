import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { useAuth0 } from '@auth0/auth0-react';
import './custom.css'
import Trips  from './components/Trips/Trips';
import Create from './components/Trips/create';
import Update from './components/Trips/Update';
import Delete from './components/Trips/Delete';

function App() {
  const displayName = App.name;
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
      <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/counter' component={Counter} />
      <Route path='/fetch-data' component={FetchData} />
      <Route path='/trips' component={Trips} />
      <Route path='/create' component={Create} />
      <Route path='/update/:id' component={Update} />
      <Route path='/delete/:id' component={Delete} />
    </Layout>
      </>
    );
  } else {
    return (
      <>
    <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data' component={FetchData} />
  </Layout>
  </>
    );
  }
 
  }

export default App;