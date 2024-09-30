import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SideBar.css";
import Home from "./../../Assets/SideBarIcon/Home.svg";
import QuoteGenerator from "./../../Assets/SideBarIcon/Speech bubble.svg";
import Procurement from "./../../Assets/SideBarIcon/Deal.svg";
import Quality from "./../../Assets/SideBarIcon/Medal.svg";
import Sales from "./../../Assets/SideBarIcon/Business.svg";
import arrowIcon from "./../../Assets/SideBarIcon/arrowIcon.svg";

const useLocalStorage = (key, initialValue) => {
  const storedValue = sessionStorage.getItem(key);
  const initial = storedValue ? new Map(JSON.parse(storedValue)) : initialValue;
  const [value, setValue] = useState(initial);

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(Array.from(value.entries())));
  }, [key, value]);

  return [value, setValue];
};
const SideBar = () => {
  const [dropdownState, setDropdownState] = useLocalStorage(
    "dropdownState",
    new Map()
  );
  const navigate = useNavigate();
  const location = useLocation();
  const handleDropDown = (index) => {
    const newDropdownState = new Map(dropdownState);
    newDropdownState.set(index, !newDropdownState.get(index));
    setDropdownState(newDropdownState);

    const item = sidebarData[index];
    if (item.link && !item.dropdown) {
      navigate(item.link);
    }
  };
  const handleLinkClick = (event, link) => {
    navigate(link);
    event.stopPropagation();
  };
  const isActiveDropdown = (index) =>
    dropdownState.get(index) && sidebarData[index].dropdown;

  const sidebarData = [
    {
      text: "Home",
      link: "home",
      imgSrc: Home,
      alt: "side-img",
      dropdown: false,
      permission: true,
      arrowImage: false,
    },
    {
      text: "Users",
      link: "User",
      imgSrc: Home,
      alt: "side-img",
      dropdown: false,
      permission: true,
      arrowImage: false,
    },
    {
      text: "Sales Tracker",
      link: "SalesTracker",
      imgSrc: Sales,
      alt: "side-img",
      dropdown: true,
      permission: true,
      arrowImage: true,
      dropDownData: [
        { title: "Dashboard", link: "/dashboard" },
        { title: "All Enquiries", link: "/enquires" },
        { title: "Awaiting Quotes", link: "/awaiting-quotes" },
        { title: "Awaiting Order", link: "/awaiting-order" },
        { title: "Again Inquiries", link: "/again-enquiries" },
        { title: "Report", link: "/report" },
      ],
    },
    {
      text: "Quality",
      link: "Quality",
      imgSrc: Quality,
      alt: "side-img",
      permission: true,
      dropdown: false,
      arrowImage: true,
    },
    {
      text: "Procurement",
      link: "Procurement",
      imgSrc: Procurement,
      alt: "side-img",
      permission: true,
      dropdown: false,
      arrowImage: true,
    },
    {
      text: "Quote Generator",
      link: "QuoteGenerator",
      imgSrc: QuoteGenerator,
      alt: "side-img",
      permission: true,
      dropdown: false,
      arrowImage: true,
    },
  ];

  const sidebarElements = sidebarData.map((item, index) => (
    <li
      onClick={() => handleDropDown(index)}
      key={index}
      className={`${isActiveDropdown(index) ? "d-height" : "d-height1"}`}
    >
      <div
        className={`sidebar-link df Color${isActiveDropdown(index) ? "1" : ""}`}
      >
        <div className="df sidebar-link-right">
          <img
            src={item.imgSrc}
            alt={item.alt}
            className={`${dropdownState[index] && item.dropdown ? "Border-Color" : ""
              }`}
          />
          <p
            className={`${isActiveDropdown(index) ? "Border-Color" : "sidebar-link-title"
              }`}
          >
            {item.text}
          </p>
        </div>
        {item.arrowImage && (
          <div
            className={`homesidebar-rightarrow ${isActiveDropdown(index) ? "arrow-down" : ""
              }`}
          >
            <img src={arrowIcon} alt="icon" />
          </div>
        )}
      </div>
      {isActiveDropdown(index) && (
        <div className="dropdown-line">
          <hr />
          <div className={` dropdown-link df`}>
            <ul className="df">
              {item.dropDownData.map((dropItem, dropIndex) => (
                <div
                  className={`sidebar-dropdown ${location.pathname === dropItem.link ? "active" : ""
                    }`}
                  key={dropIndex}
                >
                  <li
                    onClick={(event) => handleLinkClick(event, dropItem.link)}
                    className={`df ${location.pathname === dropItem.link
                        ? "link-col"
                        : "link-col1"
                      } dropdown-links`}
                  >
                    {dropItem.title}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  ));

  return (
    <aside>
      <ul className="home-sidebar df">{sidebarElements}</ul>
    </aside>
  );
};

export default SideBar;
