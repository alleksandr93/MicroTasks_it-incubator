import styled from 'styled-components';

export const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;

    & > a {
        text-decoration: none;
        color: #282c34
    }

    & > a.active {
        color: #7fb8f1;
        text-decoration: underline;
    }

    & > a:hover {
        color: steelblue;
    }
`
export const Header = styled.div`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`
export const Body = styled.div`
    display: flex;
`
export const Nav = styled.div`
    background-color: white;
    min-height: 400px;
    width: 30%;
    color:#282c34;
    font-size: 30px;
`
export const Content = styled.div`
    background-color:#282c34;
    min-height: 400px;
    width: 70%;
    color: white;
    font-size: 30px;
`
export const Footer = styled.div`
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
`
export const ErrorContainer=styled.div`
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 90%;
    margin: 0 auto;
    h1{
        font-size: 8rem;
        color: #ff6b6b;
        margin-bottom: 20px;
    }
    h2{
        font-size: 2rem;
        margin-bottom: 10px;
    }
    p{
        margin-bottom: 20px;
        font-size: 1rem;
        color: #555;
    }
    a{
        display: inline-block;
        padding: 10px 20px;
        font-size: 1rem;
        color: #fff;
        background-color: #ff6b6b;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        &:hover{
            background-color: #ff4c4c;
        }
    }
    @media (max-width: 768px) {
        h1 {
            font-size: 6rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        p {
            font-size: 0.9rem;
        }

        a {
            font-size: 0.9rem;
        }
    }
`