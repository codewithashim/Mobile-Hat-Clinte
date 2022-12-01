import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Swal } from "sweetalert2";
import { AuthContext } from "../../../Context/UserContext";

const AddProduct = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const imgHostingKey = process.env.REACT_APP_imgbb_Key;
  const { user } = useContext(AuthContext);

  const hendelAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())

      .then((photoData) => {
        if (photoData.success) {
          const posting_time = new Date().toLocaleString();
          const seller_email = user.email;
          const addProduct = {
            product_name: data.product_name,
            product_price: data.product_price,
            spacification: data.description,
            categoryName: data.product_cetegory,
            condition_type: data.condition_type,
            mobile_number: data.mobile_number,
            location: data.location,
            year_of_purches: data.year_of_purches,
            img: photoData.data.display_url,
            posting_time: posting_time,
            seller_email: seller_email,
          };
          console.log(addProduct);

          fetch("http://localhost:8000/products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(addProduct),
          })
            .then((res) => res.json())
            .then((data) => {
       
              Swal.fire("Adde Product!", "You clicked the button!", "success");
              navigate("/dashboard/myproduct");
            });
        }
      });
  };

  return (
    <section className="p-8">
      <div>
        <h1 className="font-bold text-2xl py-2">Add Product</h1>
        <div className="divider"></div>
      </div>
      <div>
        <form onSubmit={handleSubmit((data) => hendelAddProduct(data))}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="product_name"
              {...register("product_name", { required: true })}
              placeholder="Product Name "
              className="input input-bordered"
            />
            {errors.product_name?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Product Name filde is required
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input
              type="text"
              name="product_price"
              {...register("product_price", { required: true })}
              placeholder="Product Price "
              className="input input-bordered"
            />
            {errors.product_price?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Product Price filde is required
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Condition Type</span>
            </label>
            <input
              type="text"
              name="condition_type"
              {...register("condition_type", { required: true })}
              placeholder="Product Condition Type "
              className="input input-bordered"
            />
            {errors.condition_type?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Product Condition filde is required
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              type="number"
              name="mobile_number"
              {...register("mobile_number", { required: true })}
              placeholder="Mobile Number "
              className="input input-bordered"
            />
            {errors.mobile_number?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Mobile Number filde is required
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              {...register("location", { required: true })}
              placeholder="Your Location "
              className="input input-bordered"
            />
            {errors.location?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Location filde is required
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Cetegory</span>
            </label>

            <select
              className="select select-bordered w-full"
              name="product_cetegory"
              {...register("product_cetegory", { required: true })}
            >
              <option disabled selected>
                Select Category
              </option>
              <option>ViVo</option>
              <option>Samsung</option>
              <option>Oppo</option>
              <option>Nokia</option>
              <option>Realme</option>
              <option>Redmi</option>
            </select>
            {errors.product_cetegory?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Product Cetegory filde is required
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Year Of Purches</span>
            </label>
            <input
              type="text"
              name="year_of_purches"
              {...register("year_of_purches", { required: true })}
              placeholder="Year Of Purches "
              className="input input-bordered"
            />
            {errors.year_of_purches?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Year Of Purches filde is required
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              {...register("description", { required: true })}
              placeholder="Product Description "
              className="input input-bordered"
            ></textarea>
            {errors.description?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Decibction filde is required
              </p>
            )}
          </div>

          <div className="form-control">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Pick a file</span>
              </label>
              <input
                type="file"
                {...register("image", {
                  required: "Photo is Required",
                })}
                className="file-input file-input-bordered w-full"
              />
              {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )}
            </div>
            {errors.photo?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Product Image filde is required
              </p>
            )}
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary w-full"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
export default AddProduct;
