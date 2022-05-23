import { render } from "react-dom";

import "./styles.css";
import AppView from "./main/view/AppView";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const rootElement = document.getElementById("root");
render(<AppView />, rootElement);