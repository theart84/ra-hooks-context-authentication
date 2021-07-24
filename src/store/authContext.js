import React, {useEffect, useState} from "react";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  user: {},
  news: {},
  error: '',
  login: (credentials) => {},
  logout: () => {}
});

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (data && data.isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [])

  useEffect(() => {
    if (error) {
      localStorage.removeItem('user');
      return;
    }
    if (isLoggedIn) {
      const sendRequest = async () => {
        setError(null);
        try {
          const user = JSON.parse(localStorage.getItem('user'));
          const response = await fetch('http://localhost:7070/private/me', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${user.token}`
            },
          })
          if (!response.ok) {
            throw  new Error('Что-то пошло не так...');
          }
          const json = await response.json();
          setUser(json);
        } catch (e) {
          setError({status: 'error', message: 'Unauthorized', service: e.message});
          setUser({});
          setNews([]);
          setIsLoggedIn(false);
        }
      }
      sendRequest();
    }
  }, [isLoggedIn])

  const onLoginHandler = (credentials) => {
    const sendRequest = async () => {
      setError(null);
      try {
        const response = await fetch('http://localhost:7070/auth', {
          method: 'POST',
          body: JSON.stringify(credentials)
        })
        if (!response.ok) {
          throw  new Error('Что-то пошло не так...');
        }
        const json = await response.json()
        localStorage.setItem('user', JSON.stringify({
          isLoggedIn: true,
          token: json.token
        }));
        setIsLoggedIn(true);
      } catch (e) {
        setError({status: 'error', message: 'Unauthorized', service: e.message});
        setUser({});
        setNews([]);
        setIsLoggedIn(false);
      }
    }
    sendRequest();
  }

  const onLogoutHandler = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser({});
    setNews([]);
  }

  const getNews = () => {
    const sendRequest = async () => {
      setError(null);
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await fetch('http://localhost:7070/private/news', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${user.token}`
          },
        })
        if (!response.ok) {
          throw  new Error('Что-то пошло не так...');
        }
        const json = await response.json()
        setNews(prevState => [...prevState, ...json]);
      } catch (e) {
        setError({status: 'error', message: 'Unauthorized', service: e.message});
      }
    }
    sendRequest();
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      news,
      error,
      user,
      login: onLoginHandler,
      logout: onLogoutHandler,
      getNews
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
