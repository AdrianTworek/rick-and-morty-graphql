import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { FavoritesContextProvider } from './context/favoritesContext'
import { CurrentCharacterContextProvider } from './context/currentCharacterContext'

import App from './App'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ApolloProvider client={client}>
    <Router>
      <CurrentCharacterContextProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </CurrentCharacterContextProvider>
    </Router>
  </ApolloProvider>
)
