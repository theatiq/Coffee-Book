import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorites, removeFavorite } from "../utils/utility";
import Card from "../components/Card";

const DashBoards = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favorites = getAllFavorites();
    setCoffees(favorites);
  }, []);

  const handleRemove = (id) => {
    removeFavorite(id);
    const favorites = getAllFavorites();
    setCoffees(favorites);
  };

  return (
    <div>
      <Heading
        title="Welcome to Dashboard"
        subtitle="Manage coffees that you have previously added as favorite. You can view or remove them from here."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <Card handleRemove={handleRemove} coffee={coffee}></Card>
        ))}

        {/* {coffees.map(coffee => (
          <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee} />
        ))} */}
      </div>
    </div>
  );
};

export default DashBoards;
