import React from 'react';
import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom'
import { TableListProvider } from './providers/TableListProvider';
import { CategoryProvider } from './providers/CategoryContext';
import { EquipamentsProvider } from './providers/EquipamentsContext';

function App() {
  return (
    <EquipamentsProvider>
      <CategoryProvider>
        <TableListProvider>
          <BrowserRouter>
            <RoutesApp />
          </BrowserRouter>
        </TableListProvider>
      </CategoryProvider>
    </EquipamentsProvider>
  );
}

export default App;