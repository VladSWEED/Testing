
import Header from './Components/Header';
import Routes from './Components/Routes';
import useFetchEmployeeOnDidMount from './Hooks/useFetchEmployeeOnDidMount';

function App() {  
  useFetchEmployeeOnDidMount();
  return (
    <>
      <Header />
      <Routes />
    </>         
  );
}

export default App;
