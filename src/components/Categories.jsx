import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`./category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab text-2xl font-thin ${isActive ? "tab-active" : ""}`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;

// <div role="tablist" className="tabs tabs-lifted">
// <input
//   type="radio"
//   name="my_tabs_2"
//   role="tab"
//   className="tab"
//   aria-label="Tab 1"
// />
// <div
//   role="tabpanel"
//   className="tab-content bg-base-100 border-base-300 rounded-box p-6"
// >
//   Tab content 1
// </div>

// <input
//   type="radio"
//   name="my_tabs_2"
//   role="tab"
//   className="tab"
//   aria-label="Tab 2"
//   defaultChecked
// />
// <div
//   role="tabpanel"
//   className="tab-content bg-base-100 border-base-300 rounded-box p-6"
// >
//   Tab content 2
// </div>

// <input
//   type="radio"
//   name="my_tabs_2"
//   role="tab"
//   className="tab"
//   aria-label="Tab 3"
// />
// <div
//   role="tabpanel"
//   className="tab-content bg-base-100 border-base-300 rounded-box p-6"
// >
//   Tab content 3
// </div>

// </div>
