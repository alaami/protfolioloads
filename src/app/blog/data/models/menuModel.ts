import type { PrimaryMenu } from "../../domain/entities/menuEntity";
const create= (menu:PrimaryMenu) => {
    return ({menu:menu.menu});};

export {create}