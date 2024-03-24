import React from "react";

const MenuToggle = ({ index, openMenus, setOpenMenus, children }) => {
  const handleMenuClick = () => {
    setOpenMenus((prevOpenMenus) => {
      const newMenus = new Set(prevOpenMenus);
      if (newMenus.has(index)) {
        newMenus.delete(index);
      } else {
        newMenus.add(index);
      }
      return [...newMenus];
    });
  };

  return <div onClick={handleMenuClick}>{children}</div>;
};

export default MenuToggle;
