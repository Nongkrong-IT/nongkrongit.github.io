import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './views/Layout';
import "./App.css";



const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;