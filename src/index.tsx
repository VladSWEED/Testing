import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyleWrapper } from './Components/StyleWrapper';
import { EmployeeProvider } from './Contexts/EmployeesContext';
import App from './App';

import './Utils/i18n';

ReactDOM.render(
  <StrictMode>
    <Suspense fallback="...is loading">
      <Router>
        <StyleWrapper>
          <EmployeeProvider>
            <App />
          </EmployeeProvider>      
        </StyleWrapper>
      </Router>
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
);
