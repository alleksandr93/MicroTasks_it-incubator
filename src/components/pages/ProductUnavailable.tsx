import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ProductUnavailable = () => {
    return (
        <Container>
            <Icon>🚫</Icon>
            <Title>Товар отсутствует</Title>
            <Message>
                К сожалению, данный товар временно недоступен. Попробуйте позже или
                выберите другой товар.
            </Message>
            <Link to={'/'}>
                Вернуться на главную
            </Link>
        </Container>
    );
};

export default ProductUnavailable;

const Container = styled.div`
  text-align: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
  border: 2px solid #ff6b6b;
  margin: 20px auto;
    a{
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        color: #fff;
        background-color: #ff6b6b;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background 0.3s ease;
        &:hover {
            background-color: #e55d5d;
        }

        @media (max-width: 480px) {
            font-size: 14px;
            padding: 8px 16px;
        }
    }
`;

const Icon = styled.div`
  font-size: 50px;
  color: #ff6b6b;
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #ff6b6b;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Message = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

