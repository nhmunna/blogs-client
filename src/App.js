import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyBlogs from './components/MyBlogs/MyBlogs';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import UserInfo from './components/UserInfo/UserInfo';
import Write from './components/Write/Write';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/write" element={<Write></Write>}></Route>
          <Route path="/myblogs" element={<MyBlogs></MyBlogs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/userInfo" element={<UserInfo></UserInfo>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
