import  {i18n}  from '@/../i18n'
import { useContext } from 'react'
import { I18nContext } from 'next-i18next'
import React from "react";
import styled from '@emotion/styled';
import { LanguageSwitcherStyled } from '@/main/utils/customStyle';
const LanguageSwitcher = () => {
    const { i18n: { language } } = useContext(I18nContext);
    return(
        <LanguageSwitcherStyled>
            <button type="button" onClick={() => i18n.changeLanguage('fr-CA')} className={language === 'fr-CA' ? 'is-active': ''}>FR</button>
            <button type="button" onClick={() => i18n.changeLanguage('en-CA')} className={language === 'en-CA' ? 'is-active': ''}>EN</button>
        </LanguageSwitcherStyled>
    );


};

/*const LanguageSwitcherStyled = styled.div`
    button.is-active {
        background: $;
        color: #fff;
    }
`;*/
  

export default LanguageSwitcher
