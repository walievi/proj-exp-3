import React from 'react';
import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom'
import { TableListProvider } from './providers/TableListProvider';
import { CategoryProvider } from './providers/CategoryContext';
import { EquipamentsProvider } from './providers/EquipamentsContext';
import { PatrimonyProvider } from './providers/PatrimonyContext';
import { PeopleProvider } from './providers/PeopleContext';
import { AuthProvider } from './providers/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PeopleProvider>
          <PatrimonyProvider>
            <EquipamentsProvider>
              <CategoryProvider>
                <TableListProvider>
                  <RoutesApp />
                </TableListProvider>
              </CategoryProvider>
            </EquipamentsProvider>
          </PatrimonyProvider>
        </PeopleProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;