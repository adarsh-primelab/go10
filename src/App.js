import './App.css';
import AppLayout from './components/Layout';
import 'antd/dist/antd.min.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import AppRouter from './components/Router';
import { BrowserRouter as Router } from 'react-router-dom';

const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppLayout >
          <AppRouter />
        </AppLayout>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
