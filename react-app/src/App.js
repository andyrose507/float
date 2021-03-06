import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SongPlayer from "./components/songs/SongPlayer"
import CreateSongProvider from "./context/CreateSongProvider";
import EditSongProvider from "./context/EditSongProvider";
import PlayerProvider from "./context/PlayerProvider"
import { ModalProvider } from "./context/Modal";
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import Home from './components/home/Home'
import { authenticate } from './store/session';
import SongPage from "./components/songs/SongPage";
import AllSongs from "./components/songs/AllSongs";

const PageContent = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 7vh;
`

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <ModalProvider>
      <PlayerProvider>
        <CreateSongProvider>
          <EditSongProvider>
            <NavBar />
            <PageContent>
              <Switch>
                <Route path='/login' exact={true}>
                  <LoginForm />
                </Route>
                <Route path='/sign-up' exact={true}>
                  <SignUpForm />
                </Route>
                <Route path='/songs/:songId' exact>
                  <SongPage />
                </Route>
                <Route path='/all' exact>
                  <AllSongs />
                </Route>
                <Route path='/' exact={true} >
                  <Home />
                </Route>
              </Switch>
            </PageContent>
          </EditSongProvider>
        </CreateSongProvider>
        <SongPlayer src={"https://cdn.discordapp.com/attachments/858135958729392152/933475310001856532/Jhene_Aiko_-_Sativa_ft._Swae_Lee_Official_Audio_1.mp3"}/>
      </PlayerProvider>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
