import * as React from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger
} from "./ui/menubar";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const MenuBar: React.FC = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger asChild>
          <Link to="/">Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger asChild>
          <Link to="/library">Library</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger asChild>
          <Link to="/data">Data</Link>
        </MenubarTrigger>
      </MenubarMenu>
    
      <ModeToggle />
    </Menubar>
  );
};

export default MenuBar;
