import React from "react";
import Heading from "../components/Heading";

const DashBoards = () => {
  return (
    <div>
      <Heading
        title="Welcome to Dashboard"
        subtitle="Manage coffees that you have previously added as favorite. You can view or remove them from here."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {/* {coffees.map(coffee => (
          <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee} />
        ))} */}
        <h1>Favorite Coffees</h1>
      </div>
    </div>
  );
};

export default DashBoards;
