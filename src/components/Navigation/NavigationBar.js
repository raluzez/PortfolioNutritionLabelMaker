import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import { changeBackground } from '../../Utility/Helpers';
import Styles from "./NavigationBar.module.css";

const navigationBar = () => (
    <ul className={Styles.NavigationBar}>
        <NavigationItem link="/createRecipe" exact onclick={() => changeBackground('white')}>Create</NavigationItem>
        <NavigationItem link="/productlist" onclick={() => changeBackground('#eee')}>Products</NavigationItem>
        <NavigationItem link="/recipes" onclick={() => changeBackground('#eee')}>Recipies</NavigationItem>
        <NavigationItem link="/logout" onclick={() => changeBackground('white')}>Logout</NavigationItem>
    </ul>    
);
    
export default navigationBar;