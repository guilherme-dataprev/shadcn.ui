import * as React from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem
} from "./ui/menubar";
import { Link } from "react-router-dom";

const MenuBar: React.FC = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link to="/">Home</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link to="/library">Library</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link to="/data">Data</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {/* <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link to="/edit-profile">Edit Profile</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link to="/settings">Settings</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link to="/view-stats">View Stats</Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link to="/dashboard">Dashboard</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu> */}
    </Menubar>
  );
};

export default MenuBar;
