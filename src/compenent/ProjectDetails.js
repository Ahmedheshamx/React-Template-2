import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/details.css";

export default function ProjectDetails() {
  const params = useParams();
  const [project, setProject] = useState({});




  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get(`https://backend.sheede.sa/api/properties/projects/${params.id}`);
      setProject(res.data.results);
    };

    if (params.id) {
      getMovie();
    }
  }, [params.id]);









const bg = project.images?.[0]


  return (
    // <div className="container py-4" dir="rtl">
    //   {/* صورة رئيسية */}
    //   {project.images?.[0]?.image && (
    //     <img
    //       src={project.images[0]}
    //       alt={project.title}
    //       className="w-100 rounded mb-4"
    //       style={{ maxHeight: 400, objectFit: "cover" }}
    //     />
    //   )}

    //   {/* معلومات أساسية */}
    //   <h1 className="fw-bold">{project.title}</h1>
    //   <p className="text-muted">
    //     📍 {project.city} — {project.location}
    //   </p>
    //   <p>{project.description}</p>

    //   {/* السعر */}
    //   {/* {minPrice && (
    //     <div className="alert alert-info text-end">
    //       <strong>نطاق السعر:</strong> {minPrice.toLocaleString()} —{" "}
    //       {maxPrice.toLocaleString()} ريال
    //     </div>
    //   )} */}

    //   {/* الوحدات */}
    //   {project.units?.length > 0 && (
    //     <>
    //       <img
    //         src={project.images[0]}
    //         alt={project.title}
    //         className="w-100 rounded mb-4"
    //         style={{ maxHeight: 400, objectFit: "cover" }}
    //       />
    //       <h4 className="mt-4 mb-3">الوحدات المتاحة</h4>
    //       <div className="row g-3">
    //         {/* {project.units.map((unit) => (
    //           <div key={unit.id} className="col-md-4 card-container">
    //             <div className="card text-end h-100">
    //               <div className="card-body  card-infoo" >
    //                 <div>
    //                   <h6 className="card-title">{unit.title}</h6>
    //                   <p className="text-muted small mb-1">
    //                     المساحة: {unit.area}
    //                   </p>
    //                   <p className="text-muted small mb-1">
    //                     الغرف: {unit.rooms}
    //                   </p>
    //                   <p className="fw-bold text-primary">
    //                     {parseFloat(unit.price).toLocaleString()} ريال
    //                   </p>
    //                 </div>

    //                 <img
    //                   src={unit.images[0]}
    //                   alt={unit.title}
    //                   className="w-50 rounded mb-2"
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         ))} */}
    //       </div>
    //     </>
    //   )}

    //   <div className="row mt-4 ">
    //     {project.images.map((img, i) => (
    //       <div key={i} className="col-4" d-flex>
    //         <img
    //           src={img} // ← مش img.image
    //           alt={`صورة ${i + 1}`}
    //           className="w-100 rounded"
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>


    <div className="ditails"  >
      <div className="ditails-container" style={{ backgroundImage: `url(${bg})` }}>
                <h2>{project.title}</h2>
                <div className="ditails-info">
              

          <p> المدينة <span>{project.city ? project.city : "غير متوفره"}</span></p>
          <p>المساحه <span>{project.area ? project.area : "غير متوفره"}</span></p>
          <p>     الوحدات<span>{project.total_units ? project.total_units   : "غير متوفره"} </span></p>


                </div>

                <p className="description">{project.description}</p>

              

      </div>

        <div className="ditails-units">
                  {project.units?.map((unit) => (
                    <div key={unit.id} className="card-container">
                      <div className="card text-end h-100">
                        <div className="card-body  card-infoo" style={{ backgroundImage: `url(${unit.images?.[1]})` }}>
                          <div>
                            <h6 className="card-title">{unit.title}</h6>
                            <p className="text-muted small mb-1">
                              المساحة: {unit.area}
                            </p>
                            <p className="text-muted small mb-1">
                              الغرف: {unit.rooms}
                            </p>
                            <p className="fw-bold text-primary">
                              {parseFloat(unit.price)} ريال
                            </p>
                          </div>  

                          
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
    </div>



  
  );
}
