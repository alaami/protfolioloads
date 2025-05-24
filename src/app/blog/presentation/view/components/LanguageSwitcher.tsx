import { i18n } from '@/../i18n'
import { useContext } from 'react'
import { I18nContext } from 'next-i18next'
import React from "react";
import styled from '@emotion/styled';
import { LanguageSwitcherStyled } from '@/main/utils/customStyle';
import { Button } from '@mui/material';
const LanguageSwitcher = () => {
    const { i18n: { language } } = useContext(I18nContext);
    return (
        <LanguageSwitcherStyled>
            <Button
                onClick={() => i18n.changeLanguage('fr-CA')}
                className={language === 'fr-CA' ? 'is-active' : ''}
            >
                FR
            </Button>
            <Button
                onClick={() => i18n.changeLanguage('en-CA')}
                className={language === 'en-CA' ? 'is-active' : ''}
            >
                EN
            </Button>
        </LanguageSwitcherStyled>
    );


};

export default LanguageSwitcher
