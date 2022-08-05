import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { getAttr } from "./cal";

function App() {
  const [selectItem, setSelectItem] = useState<any>(null);
  const boxActive = useRef<any>(null);
  const [styleBoxSelect, setStyleBoxSelect] = useState<any>({});

  useEffect(() => {
    if (selectItem?.target?.closest(".Container-items")) {
      let selectedBoxAtrr;
      const box: any = document.getElementsByClassName(".box-active");
      // box.classList.remove("box-active");

      if (
        selectItem.target.parentElement.classList.contains("Container-items")
      ) {
        selectedBoxAtrr = getAttr(selectItem.target.parentElement);
      } else {
        selectedBoxAtrr = getAttr(selectItem.target);
      }
      console.log(
        "🚀 ~ file: App.tsx ~ line 24 ~ useEffect ~ selectedBoxAtrr",
        selectedBoxAtrr
      );

      setStyleBoxSelect(selectedBoxAtrr);
    }
  }, [selectItem]);

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
            <div
              className={"Container-items " + `item-${index}`}
              onClick={setSelectItem}
            >
              {item.icon}
              <div className="text">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
