import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: #000;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 32px;

  li {
    color: #fff;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font-family: 'Markazi Text';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;

    &:hover {
        color: #F66000;
    }
  }
`;

export const SearchContainer = styled.div`
  width: 194px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
