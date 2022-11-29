import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";
// import Loader from "../Sheard/Loader/Loader";

const BookingModal = ({ product_name, _id, refetch, product, img, price }) => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const product = form.productName.value;
    const productId = _id;
    const date = new Date().toDateString();

    const status = "Booked";

    const booking = {
      productId,
      name,
      email,
      phone,
      price,
      metingAddress: address,
      productName: product,
      date,
      img,
      status,
    };

    fetch("http://localhost:8000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `Bearer ${user.accesToken}`,
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucess) {
          Swal.fire(
            "Successfully Booked Now!",
            "You clicked the button!",
            "success"
          );
          refetch();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${data.message}`,
          });
        }
      });
  };

  return (
    <section>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="bookignModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookignModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <h1 className="text-2xl font-bold text-center">Book Now Product</h1>
          </div>
          <h3 className="text-lg font-bold">{product_name}</h3>
          <div className="divider"></div>

          <form action="" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                disabled
                placeholder="Your Name"
                className="input input-bordered w-full m-2"
              />
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                placeholder="Your Name"
                className="input input-bordered w-full m-2"
              />
              <input
                type="text"
                name="productName"
                defaultValue={product_name}
                disabled
                placeholder="Product Name"
                className="input input-bordered w-full m-2"
              />
              <input
                type="text"
                name="price"
                defaultValue={product?.product_price}
                disabled
                placeholder="Product Price"
                className="input input-bordered w-full m-2"
              />
              <input
                type="number"
                name="phone"
                placeholder="Your Phone Number"
                className="input input-bordered w-full m-2"
              />
              <input
                type="text"
                name="address"
                placeholder="Meting Address"
                className="input input-bordered w-full m-2"
              />

              <input
                type="submit"
                placeholder="Type here"
                className="input input-bordered w-full btn btn-primary m-2"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingModal;
