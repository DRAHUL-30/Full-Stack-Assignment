import {createContext} from "react";

let loggedIn=(false);
export const context=createContext({loggedIn:loggedIn,changeLoggin});


function changeLoggin(){
    loggedIn=(true);
}