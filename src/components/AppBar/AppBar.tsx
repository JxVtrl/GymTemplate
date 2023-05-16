import React from "react";
import Logo from "../../assets/logo";
import Search from "../../assets/Search";

import * as S from "./AppBar.styles";

const AppBar: React.FC = () => {
  return (
    <S.Container>
      <Logo />
      <S.List>
        <li>Home</li>
        <li>Sobre</li>
        <li>Aulas</li>
        <li>Time</li>
        <li>Planos</li>
        <li>Contato</li>
      </S.List>
      <S.SearchContainer>
        <Search />
      </S.SearchContainer>
    </S.Container>
  );
};

export default AppBar;
