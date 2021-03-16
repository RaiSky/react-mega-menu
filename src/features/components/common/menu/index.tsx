import React, { useEffect, useState } from "react";
import "./Menu.css";

import { ReactMegaMenu } from "react-mega-menu";

import {
  getData,
  createMenuItem,
} from "../../../helpers/localstorage/localstorage";

import SubMenuItem from "./submenu-item/submenu-item";

interface MenuProps {}

function Menu({}: MenuProps): JSX.Element {
  const [list, setList] = useState<any>([]);

  function handleGetList() {
    let data = getData("menu-list").data;
    const newCategories2: Array<any> = [];
    data.forEach((category) => {
      let object = {
        label: category.label,
        key: category.label,
        items: <SubMenuItem items={category.subcategories} />,
      };
      newCategories2.push(object);
    });
    setList(newCategories2);
  }
  useEffect(() => {
    handleGetList();
  }, []);

  return (
    <>
      <div className="menu-wrapper">
        {list.length > 0 ? (
          <ReactMegaMenu
            direction={"RIGHT"}
            styleConfig={{
              ...styles,
            }}
            data={list}
          />
        ) : (
          <h3>Empty</h3>
        )}
      </div>
    </>
  );
}

const styles = {
  menuProps: {
    style: {
      border: "2px solid red",
      height: "auto",
      width: "100%",
      padding: "2px",
      margin: "0",
      order: "1",
      display: "flex",
    },
  },
  contentProps: {
    style: {
      width: "100%",
      border: "2px solid yellow",
      padding: "2px",
      order: "2",
    },
  },
  menuItemProps: {
    style: {
      padding: "2px",
      height: "2em",
      cursor: "pointer",
    },
  },
  menuItemSelectedProps: {
    style: {
      borderBottom: "2px solid purple",
      padding: "2px",
      height: "2em",
      cursor: "pointer",
    },
  },
  containerProps: {
    style: {
      width: "100%",
      border: "2px solid blue",
      padding: "2px",
      display: "flex",
      flexDirection: "column",
      height: "auto",
      position: "relative",
    },
  },
};
export default Menu;
