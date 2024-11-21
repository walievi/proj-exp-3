import React from 'react';
import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom'
import { TableListProvider } from './providers/TableListProvider';
import { CategoryProvider } from './providers/CategoryContext';
import { EquipamentsProvider } from './providers/EquipamentsContext';
import { PatrimonyProvider } from './providers/PatrimonyContext';

function App() {
  return (
    <PatrimonyProvider>
      <EquipamentsProvider>
        <CategoryProvider>
          <TableListProvider>
            <BrowserRouter>
              <RoutesApp />
            </BrowserRouter>
          </TableListProvider>
        </CategoryProvider>
      </EquipamentsProvider>
    </PatrimonyProvider>
  );
}

export default App;