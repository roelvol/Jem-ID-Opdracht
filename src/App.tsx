import React from 'react';
import axios from 'axios';
import { Artikel } from "./Interface/Interface"
import { MyTable } from './components/MyTable';
import Search from './components/Search'

const defaultRows: Artikel[] = [];

const App = () => {
  const [rows, setRows]: [Artikel[], (rows: Artikel[]) => void] = React.useState(
    defaultRows
  );

  
  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  );

  const [query, setQuery] = React.useState('')

  React.useEffect(() => {
    axios
      .get<Artikel[]>('https://api.floraxchange.nl/artikel?relatieid=215', {
        timeout: 10000,
      })
      .then((response) => {
        if ( query === '') {
        setRows(response.data)
        setLoading(false) }
        else {
        setRows(response.data.filter((row) => row.Potmaat === query));
        setLoading(false) }
      })
      .catch((ex) => {
        let error = axios.isCancel(ex)
          ? 'Request Cancelled'
          : ex.code === 'ECONNABORTED'
          ? 'A timeout has occurred'
          : ex.response.status === 404
          ? 'Resource Not Found'
          : 'An unexpected error has occurred';

        setError(error);
        setLoading(false);
      });
  }, [query]);

  
  return (
    <div className="App">
      <h1 className="Hoofd">Aanbod artikelen</h1>
      <div className="main"> 
      <Search getQuery={(q: string) => setQuery(q)} />
      <br></br> 
      <MyTable rows={rows}/>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;