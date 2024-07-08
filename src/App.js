import React, {useState} from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
const App =()=> {
   const page=9;
   const apiKey=process.env.REACT_APP_NEWS_API;
  const[progress,setProgress] =useState(0);
  return (
    <div>
     <Router>
   
    <Navbar />
    <LoadingBar  color='#f11946'
      progress={progress}
      />
    <Routes>
      <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general1" pageSize={page} country="in" category="general" />} />
      <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general12" pageSize={page} country="in" category="general" />} />
      <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business1" pageSize={page} country="in" category="business" />} />
      <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment1" pageSize={page} country="in" category="entertainment" />} />
      <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health1" pageSize={page} country="in" category="health" />} />
      <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science1" pageSize={page} country="in" category="science" />} />
      <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports1" pageSize={page} country="in" category="sports" />} />
      <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology1" pageSize={page} country="in" category="technology" />} />
    </Routes>
  </Router>


    {/* <Router>
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  Key="general1" paeSize={6} country="in" category="general"/>}></Route>
        <Route exact  path="/business"  element={<News setProgress={setProgress} apiKey={apiKey}   Key="business1" ageSize={6} country="in" category="business"/>}></Route>
        <Route exact path="/entertainment"  element={<News setProgress={setProgress} apiKey={apiKey}  Key="entertainment1" pageSize={page} country="in" category="entertainment"/>}></Route>
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  Key="health1" pagSize={6} country="in" category="health"/>}></Route>
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  Key="science1" pagSize={6} country="in" category="science"/>}></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  Key="sports1" pagSize={6} country="in" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  Key="technology1" pagSize={6} country="in" category="technology"/>}></Route>
      </Routes>
    </Router> */}
    </div>
  )
  }

export default App