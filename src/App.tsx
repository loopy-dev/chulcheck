import './App.css';
import GlobalLayout from './components/layouts/GlobalLayout';
import Router from './routes';

const App = () => (
  <GlobalLayout>
    <Router />
  </GlobalLayout>
);

export default App;
