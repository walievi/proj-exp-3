import React from 'react';
import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom'
import { TableListProvider } from './providers/TableListProvider';

function App() {
  return (
    <TableListProvider>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </TableListProvider>
  );
}

export default App;