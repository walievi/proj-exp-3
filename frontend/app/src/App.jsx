import React from 'react';
import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom'
import { TableListProvider } from './providers/TableListProvider';
import { CategoryProvider } from './providers/CategoryContext';

function App() {
  return (
    <CategoryProvider>
      <TableListProvider>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </TableListProvider>
    </CategoryProvider>
  );
}

export default App;