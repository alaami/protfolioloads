import "./styles.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { AppProps } from "next/app"
import { Provider } from "react-redux";
import { Container, ThemeProvider } from "@mui/material";
import Footer from "@/app/blog/presentation/view/components/footer";
import { appStoreImplementation } from "@/main/data/appStoreImplementation";
import { customTheme } from "@/main/utils/customTheme";
import HeaderLayout from "@/app/blog/presentation/view/components/HeaderLayout";
import React, { useEffect, useState } from "react";
import  {appWithTranslation}  from '../../i18n'

function  MyApp({ Component, pageProps}: AppProps) {
const [locale, setLocale] = useState("");

useEffect(() => {
if(window.localStorage.getItem('lang')=='null'){
	setLocale('en-CA');
	window.localStorage.setItem('lang', 'en-CA');
}else{
	setLocale(window.localStorage.getItem('lang')!);
}



}, []);

useEffect(() => {
window.localStorage.setItem('lang', locale);
}, [locale]);


function handleLanguageChange(locale:string){
 setLocale(locale);
}
return (
<Provider store={appStoreImplementation}>
<ThemeProvider theme={customTheme}>
	<HeaderLayout locale={locale} onLanguageChange={handleLanguageChange} />
	<Container maxWidth="xl">
		<Component {...pageProps} />
	</Container>	
	<Footer />
	</ThemeProvider>
	</Provider>);

}

export default appWithTranslation(MyApp);