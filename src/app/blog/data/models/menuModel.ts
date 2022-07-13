import type { Menus } from "../../domain/entities/menuEntity";
const create= (menu:Menus) => {
    return ({data:menu.data});};

export {create}