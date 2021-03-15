import * as React from "react";
import submenuItems from "../demoData";

interface Props {
  parentid: number;
}

export const Submenu: React.FC<Props> = ({ parentid }) => {
  return (
    <div>
      {submenuItems.map((submenuItem) => (
        <>
          {parentid === submenuItem.parentid ? (
            <div
              key={submenuItem.parentid}
              style={{
                display: "flex",
              }}
            >
              <div style={{ flex: "1" }}>
                {submenuItem.left.map((item) => (
                  <ul key={item.id}>
                    <li style={{ listStyle: "none", fontWeight: "bold" }}>
                      {item.title}
                    </li>
                    {item.content.map((subitem) => (
                      <li
                        key={subitem.id}
                        style={{ listStyle: "none", cursor: "pointer" }}
                      >
                        {subitem.subtitle}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              <div style={{ flex: "1" }}>
                {submenuItem.right.map((item) => (
                  <ul key={item.id}>
                    <li style={{ listStyle: "none", fontWeight: "bold" }}>
                      {item.title}
                    </li>
                    {item.content.map((subitem) => (
                      <li
                        key={subitem.id}
                        style={{ listStyle: "none", cursor: "pointer" }}
                      >
                        {subitem.subtitle}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
};
