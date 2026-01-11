import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PageOne from './routing/pageOne';
import PageTwo from './routing/PageTwo';

import Users from './routing/Users';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* route params */}
        <Route path="/" element={<PageOne/>}></Route>
        <Route path="/:age" element={<PageOne/>}></Route>
        <Route path="/page-two" element={<PageTwo/>} ></Route>
        {/* query params */}
        <Route path="/users" element={<Users/>}></Route>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App