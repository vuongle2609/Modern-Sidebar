import { useEffect, useRef, useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import { getAttr } from "./cal";

function App() {
  const firstRun = useRef(true);
  const boxActive = useRef<any>(null);
  const location = useLocation();
  const [styleBoxSelect, setStyleBoxSelect] = useState<any>({});

  useEffect(() => {
    if (!firstRun.current) {
      const links: any = document.getElementsByClassName("Container-items");
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = "#000";
      }
    }
    const linkActive: any = document.getElementsByClassName("Item-active")[0];
    linkActive.style.color = "#fff";
  }, [location.pathname]);

  useEffect(() => {
    let selectedBoxAtrr;
    const linkActive: any = document.getElementsByClassName("Item-active")[0];
    selectedBoxAtrr = getAttr(linkActive);
    firstRun.current = false;
    setStyleBoxSelect(selectedBoxAtrr);
  }, [location.pathname]);

  const itemsSidebar = [
    {
      label: "Dashboard",
      icon: <i className="fa-light fa-grid-horizontal"></i>,
    },
    {
      label: "Orders",
      icon: <i className="fa-light fa-cart-shopping"></i>,
    },
    {
      label: "Products",
      icon: <i className="fa-light fa-bag-shopping"></i>,
    },
    {
      label: "Overview",
      icon: <i className="fa-light fa-chart-line"></i>,
    },
    {
      label: "Customer",
      icon: <i className="fa-light fa-user-group"></i>,
    },
    {
      label: "Message",
      icon: <i className="fa-light fa-comment-dots"></i>,
    },
    {
      label: "Settings",
      icon: <i className="fa-light fa-gear"></i>,
    },
  ];

  return (
    <div className="App">
      <div className="SideBar">
        <div className="Logo">
          <i className="fa-solid fa-apple-whole"></i>
          <h2>Trynew</h2>
        </div>

        <div id="ActiveBox" ref={boxActive} style={styleBoxSelect}></div>
        <div className="Container-menu">
          {itemsSidebar.map((item, index) => (
            <NavLink
              to={item.label.toLowerCase()}
              className={(link) => {
                return (
                  (link.isActive ? "Item-active " : " ") +
                  "Container-items " +
                  `item-${index}`
                );
              }}
            >
              {item.icon}
              <div className="text">{item.label}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="main">
        <Routes>
          <Route element={<div>Dashboard</div>} path="dashboard" />
          <Route element={<div>Orders</div>} path="orders" />
          <Route element={<div>Products</div>} path="products" />
          <Route element={<div>Overview</div>} path="overview" />
          <Route element={<div>Customer</div>} path="customer" />
          <Route element={<div>Message</div>} path="message" />
          <Route element={<div>Settings</div>} path="settings" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
