import React from 'react';
import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom'
import { TableListProvider } from './providers/TableListProvider';
import { CategoryProvider } from './providers/CategoryContext';
import { EquipamentsProvider } from './providers/EquipamentsContext';
import { PatrimonyProvider } from './providers/PatrimonyContext';
import { PeopleProvider } from './providers/PeopleContext';

function App() {
  return (
    <PeopleProvider>
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
    </PeopleProvider>
  );
}

export default App;