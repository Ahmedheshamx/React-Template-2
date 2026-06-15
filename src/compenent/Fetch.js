import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./Card.js";
import "../css/fetch.css";
import { Link } from "react-router-dom";

const Fetch = ({ search }) => {
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const data = (
        await axios.get("https://backend.sheede.sa/api/properties/projects")
      ).data;

      setProjects(data.results);

      console.log(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filtered = projects.filter((ele) => {
    const q = search.toLowerCase();
    return (
      ele.title?.toLowerCase().includes(q) ||
      ele.city?.toLowerCase().includes(q) 
    );
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="main-title">المشاريع</h2>

      <div className="card-container">
        {filtered.length === 0 ? "لا يوجد نتايج..." : filtered.map((project) => {
          const firstImage = project.images[1];

          const prices = project.units.map((unit) => parseFloat(unit.price));
          const minPrice = prices.length ? Math.min(...prices) : null;
          const maxPrice = prices.length ? Math.max(...prices) : null;

          return (

            
          <Link
      key={project.id}
      to={`/project/${project.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <CardComponent
        title={project.title}
        description={project.description}
        image={firstImage}
        minPrice={minPrice}
        maxPrice={maxPrice}
        area={project.area}
        units={project.total_units}
        city={project.city}
      />
    </Link>

            
          );
        })}
      </div>
    </div>
  );
};

export default Fetch;
