import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";
import { NavLink } from "react-router-dom";

export default function NAVBAR() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <>
      <Navbar className="flex justify-center flex-wrap h-32 fin">
        <p className="text-4xl flex flex-wrap text-purple-400 font-bold titl">
          AI / LLM Marketplace
        </p>
        <NavbarContent
          className="flex gap-10 flex-wrap navc justify-center"
          justify="center"
        >
          <NavbarItem>
            <NavLink
              to=""
              className="text-red-300 text-xl nav1 gg"
              style={({ isActive }) => {
                return isActive ? { color: "tomato" } : {};
              }}
            >
              Home
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              className="text-red-300 text-xl nav2 gg"
              to="favourites"
              style={({ isActive }) => {
                return isActive ? { color: "tomato" } : {};
              }}
            >
              Favourites
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to="try"
              className="text-red-300 text-xl nav3 gg"
              style={({ isActive }) => {
                return isActive ? { color: "tomato" } : {};
              }}
            >
              Try it Out
            </NavLink>
          </NavbarItem>
          <Dropdown className="dd">
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="text-xl bg-transparent mr-2 nav4 gg text-red-300 font-semibold data-[hover=true]:bg-transparent border-0"
                  endContent={icons.chevron}
                  radius="sm"
                >
                  Categories
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                startContent={icons.scale}
                href="/speech"
              >
                <NavLink
                  to="speech"
                  className="lid"
                  style={({ isActive }) => {
                    return isActive ? { color: "tomato" } : {};
                  }}
                >
                  Speech Recognition
                </NavLink>
              </DropdownItem>
              <DropdownItem key="usage_metrics" startContent={icons.activity}>
                <NavLink
                  to="vision"
                  className="lid"
                  style={({ isActive }) => {
                    return isActive ? { color: "tomato" } : {};
                  }}
                >
                  Computer Vision
                </NavLink>
              </DropdownItem>
              <DropdownItem key="production_ready" startContent={icons.flash}>
                <NavLink
                  to="reinforcement"
                  className="lid"
                  style={({ isActive }) => {
                    return isActive ? { color: "tomato" } : {};
                  }}
                >
                  Reinforcement Learning
                </NavLink>
              </DropdownItem>
              <DropdownItem key="99_uptime" startContent={icons.server}>
                <NavLink
                  to="transformer"
                  className="lid"
                  style={({ isActive }) => {
                    return isActive ? { color: "tomato" } : {};
                  }}
                >
                  Transformer Based
                </NavLink>
              </DropdownItem>
              <DropdownItem key="NeuralNetwork" startContent={icons.user}>
                <NavLink
                  to="NeuralNetwork"
                  className="lid"
                  style={({ isActive }) => {
                    return isActive ? { color: "tomato" } : {};
                  }}
                >
                  Convolutional/Recurrent Neural Networks
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </>
  );
}
