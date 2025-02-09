import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './pages/App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { CountriesPage } from './pages/CountriesPage';
import { GeneralEntityPageSkeleton } from './components/generalEntityPage/GeneralEntityPageSkeleton';
import { GeneralItemPage } from './pages/GeneralItemPage';
import { NotFound } from './pages/NotFound';
import { MoviePage } from './pages/MoviePage';
import { MoviesPage } from './pages/MoviesPage';
import { ProfilePage } from './pages/ProfilePage';
import { RatingsHistoryPage } from './pages/RatingsHistoryPage';

const queryClient = new QueryClient(({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
    },
  },
}));

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main:  "#c9322a",
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/"                                 element={<App />} />
              <Route path="/movies"                           element={<MoviesPage />} />
              <Route path="/genres"                           element={<GeneralEntityPageSkeleton key="genres"    name='Genres'               searchName='genre'                    keyField="name" />} />
              <Route path="/keywords"                         element={<GeneralEntityPageSkeleton key="keywords"  name='Keywords'             searchName='keyword'                  keyField="name" />} />
              <Route path="/languages"                        element={<GeneralEntityPageSkeleton key="languages" name='Languages'            searchName='language'                 keyField="iso_639_1" />} />
              <Route path="/productioncompanies"              element={<GeneralEntityPageSkeleton key="companies" name='ProductionCompanies'  searchName='company'                  keyField="name" headerName="Production Companies" />} />
              <Route path="/people"                           element={<GeneralEntityPageSkeleton key="people"    name='People'               searchName='person (actor, director)' keyField="id" />} />
              <Route path="/productioncountries"              element={<CountriesPage />} />
              <Route path="/movies/:id"                       element={<MoviePage key="movies" />} />
              <Route path="/genres/:name"                     element={<GeneralItemPage key="genres"              entityName="genres"               keyField="name"       headerName="Genres" />} />
              <Route path="/keywords/:name"                   element={<GeneralItemPage key="keywords"            entityName="keywords"             keyField="name"       headerName="Keywords" />} />
              <Route path="/languages/:iso_639_1"             element={<GeneralItemPage key="languages"           entityName="languages"            keyField="iso_639_1"  headerName="Languages" />} />
              <Route path="/productioncompanies/:name"        element={<GeneralItemPage key="productioncompanies" entityName="productioncompanies"  keyField="name"       headerName="Production Companies" />} />
              <Route path="/people/:id"                       element={<GeneralItemPage key="people"              entityName="people"               keyField="id"         headerName="Crew" />} />
              <Route path="/productioncountries/:iso_3166_1"  element={<GeneralItemPage key="productioncountries" entityName="productioncountries"  keyField="iso_3166_1" headerName="Production Countries" />} />
              <Route path="/profile"                          element={<ProfilePage />} />
              <Route path="/ratings"                          element={<RatingsHistoryPage />} />
              
              <Route path="*"                                 element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
