import React from "react";

const BookingModal = ({ product_name }) => {
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
          <h3 className="text-lg font-bold">{product_name}</h3>
          <div className="divider"></div>
          <form action="">
            <div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
              <input
                type="submit"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingModal;
