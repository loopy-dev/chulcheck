import './App.css';
import Header from './components/Header';
import GlobalLayout from './components/layouts/GlobalLayout';
import Router from './routes';

const App = () => (
  <>
    <Header />
    <GlobalLayout>
      <Router />
    </GlobalLayout>
  </>
);

export default App;
