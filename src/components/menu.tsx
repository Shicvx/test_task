import React, { useState } from "react";
import ReactMegaMenu from "react-mega-menu";
import "./menu.css";
import { Flex, Segment } from "@fluentui/react-northstar";
import { MenuIcon } from "@fluentui/react-icons-northstar";
import { useCSS } from "@fluentui/react-northstar";
import { Submenu } from "./submenu";
import Setting from "./settings";
import useLocalStorage from "../useLocalStorage";

export const Menuitem: React.FC = () => {
  const [selected, setselected] = useState(0);
  const [items, setitems] = useLocalStorage<any>("items", [
    {
      id: 0,
      content: "MenuItem1",
      submenu: [
        {
          label: "Sub Menu Item 1",
          key: "0",
          items: <Submenu parentid={1.1} />,
        },
        {
          label: "Sub Menu Item 2",
          key: "1",
          items: <Submenu parentid={1.2} />,
        },
        {
          label: "Sub Menu Item 3",
          key: "2",
          items: React.createElement("li", { id: "li3" }, "three"),
        },
      ],
    },
    {
      id: 1,
      content: "MenuItem2",
      submenu: [
        {
          label: "2 Sub Menu Item 1",
          key: "0",
          items: <Submenu parentid={2.1} />,
        },
        {
          label: "2 Sub Menu Item 2",
          key: "1",
          items: <Submenu parentid={2.2} />,
        },
        {
          label: "2 Sub Menu Item 3",
          key: "2",
          items: React.createElement("li", { id: "li3" }, "three"),
        },
      ],
    },
    {
      id: 2,
      content: "MenuItem3",
      submenu: [
        {
          label: "3 Sub Menu Item 1",
          key: "0",
          items: <Submenu parentid={3.1} />,
        },
        {
          label: "3 Sub Menu Item 2",
          key: "1",
          items: <Submenu parentid={3.2} />,
        },
        {
          label: "3 Sub Menu Item 3",
          key: "2",
          items: React.createElement("li", { id: "li3" }, "3.3"),
        },
      ],
    },
    {
      id: 3,
      content: "MenuItem4",
      submenu: [
        {
          label: "4 Sub Menu Item 1",
          key: "0",
          items: React.createElement("li", { id: "li3" }, "4.1"),
        },
        {
          label: "4 Sub Menu Item 2",
          key: "1",
          items: React.createElement("li", { id: "li4" }, "4.2"),
        },
        {
          label: "4 Sub Menu Item 3",
          key: "2",
          items: React.createElement("li", { id: "li3" }, "4.3"),
        },
      ],
    },
  ]);

  const changeSelected = () => {
    if (selected === 0) {
      setselected(1);
    } else {
      setselected(0);
    }
  };

  const topmenu = [
    {
      id: 0,
      title: "Dashboard",
    },
    {
      id: 1,
      title: "Settings",
    },
  ];

  const menuitem = useCSS({
    paddingTop: "0px",
    paddingBottom: "0px",
  });

  const rowitem1 = useCSS({
    border: "0px",
    boxShadow: "none",
    fontWeight: "bold",
    cursor: "pointer",
  });
  const rowitem = useCSS({
    border: "0px",
    boxShadow: "none",
    cursor: "pointer",
  });

  const selects = useCSS({
    border: "0px",
    boxShadow: "none",
    borderBottom: "2px solid blue",
  });

  return (
    <div style={{ width: "100vw" }}>
      <Flex>
        <Segment content="INTRANET" className={rowitem1} />
        {topmenu.map((menu) => (
          <>
            {selected === menu.id ? (
              <Segment key={menu.id} content={menu.title} className={selects} />
            ) : (
              <Segment
                key={menu.id}
                content={menu.title}
                className={rowitem}
                onClick={changeSelected}
              />
            )}
          </>
        ))}
      </Flex>
      {selected === 0 ? (
        <Flex column>
          <Segment content="Content" className={menuitem}>
            <Flex gap="gap.small">
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "10px",
                  }}
                >
                  <MenuIcon />
                </div>
                {items?.map((item) => (
                  <div key={item.id} className="dropdown">
                    <button className="dropbtn">{item.content}</button>
                    <div className="dropdown-content" style={{ left: "0" }}>
                      <ReactMegaMenu
                        styleConfig={{
                          menuProps: {
                            style: {
                              height: "20em",
                              width: "10em",
                              padding: "2px",
                              margin: "0",
                              backgroundColor: "rgb(217, 215, 212)",
                              boxShadow:
                                "rgba(34, 36, 38, 0.15) 0px 1px 1px 1px",
                            },
                          },
                          contentProps: {
                            style: {
                              width: "30em",
                              padding: "2px",
                              borderTop: "2px solid blue",
                              borderRight: "1px solid rgba(34, 36, 38, 0.15)",
                              borderBottom: "1px solid rgba(34, 36, 38, 0.15)",
                            },
                          },
                          menuItemProps: {
                            style: {
                              padding: "2px",
                              height: "2em",
                              backgroundColor: "rgb(217, 215, 212)",
                              cursor: "pointer",
                            },
                          },
                          menuItemSelectedProps: {
                            style: {
                              padding: "2px",
                              height: "2em",
                              backgroundColor: "white",
                              cursor: "pointer",
                            },
                          },
                          containerProps: {
                            style: {
                              padding: "2px",
                            },
                          },
                        }}
                        onExit={() => {}}
                        data={item.submenu}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Flex>
          </Segment>
        </Flex>
      ) : (
        <Setting />
      )}
    </div>
  );
};
