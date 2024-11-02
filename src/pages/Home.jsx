import React from "react";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
    const categories = useLoaderData()
    // console.log(categories)
  return (
    <div>
      <Banner></Banner>
      <Heading
        title="Browse Coffees by Category"
        subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste."
      ></Heading>
      <Categories categories={categories}></Categories>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
