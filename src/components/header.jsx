import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Button } from "flowbite-react";

function Header() {
  return (
    <header className="flex items-center justify-evenly px-4 py-2">
      <Navbar
        fluid
        rounded
        className="flex items-center justify-evenly px-4 py-2 bg-transparent"
      >
        <div className="bg-white bg-opacity-20">
          <h1 className="font-margarine text-5xl font-bold text-sky-600 text-center bg-transparent">
            The Fun Bunch
          </h1>
          <ul className="flex space-x-20 pt-4">
            <li>
              <NavLink to="/">
                <Button className="bg-cyan-400 text-white p-1 rounded hover:bg-emerald-100">
                  Home
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <Button className="bg-cyan-400 text-white p-1 rounded hover:bg-emerald-100">
                  About Us
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/stLuciaPics">
                <Button className="bg-cyan-400 text-white p-1 rounded hover:bg-emerald-100">
                  St. Lucia Memories
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/grandAntiguaPics">
                <Button className="bg-cyan-400 text-white p-1 rounded hover:bg-emerald-100">
                  Grand Antigua Memories
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </Navbar>
    </header>
  );
}

export  default Header