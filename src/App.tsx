import React from 'react';
import {NavLink, Outlet, Route, Routes} from 'react-router-dom';
import {Body, Content, Footer, Header, Nav, NavWrapper} from './components/pages/_styles';
import ProtectedPage from './components/pages/ProtectedPage';

const PATH={
    PageOne:'/adidas',
    PageTwo:'/puma',
    PageThree:'/abibas',
    PagePrice:'/prices',
    ERROR404:'/error404',
    PROTECTEDPAGE:'/protectedPage',
}as const;
export type SnickersItem = {
    id:string
    model: string;
    collection: string;
    price: string;
    picture: string;
}

function App() {
//todo не правельный путь
    return (
        <div>
            <Header><h1>HEADER</h1></Header>
            <Body>
                <Nav>
                    <NavWrapper><NavLink  to={PATH.PageOne}>Adidas</NavLink></NavWrapper>
                    <NavWrapper><NavLink  to={PATH.PageTwo}>Puma</NavLink></NavWrapper>
                    <NavWrapper><NavLink  to={PATH.PageThree}>Abibas</NavLink></NavWrapper>
                    <NavWrapper><NavLink  to={PATH.PagePrice}>Цены для оптовиков</NavLink></NavWrapper>
                    <NavWrapper><NavLink to={PATH.PROTECTEDPAGE}>Protected Page</NavLink></NavWrapper>
                </Nav>
                <Content>
                    <Outlet/>
                    {/* <Routes>
                   <Route path="/" element={<Navigate to={PATH.PageOne}/>}/>

                 <Route path={PATH.PageOne} element={<Adidas/>}/>
                  <Route path={PATH.PageTwo} element={<Puma/>}/>
                  <Route path={PATH.PageThree} element={<Abibas/>}/>
                   <Route path={'/adidas/:id/:module'} element={<Model />}/>
                 <Route path={PATH.PagePrice} element={<Prices />}/>


                   <Route path="/*" element={<Error404/>}/>
               /!*<Route path="/puma/*" element={<ModelError/>}/>


                 </Routes> */}

                </Content>
            </Body>
            <Footer>abibas 2023</Footer>
        </div>
    );
}


export default App;
