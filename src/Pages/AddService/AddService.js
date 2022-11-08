import React from "react";
import swal from "sweetalert";
import useTitle from "../../CustomHooks/useTitle";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;
    
    const date = Date();
    const split = date.split(' ');
    const dateArray = [split[2], split[1], split[3], split[4]];
    const serviceAddTime = dateArray.join(' ');

    const service = {
      name,
      image,
      price,
      description,
      serviceAddTime
    };

    fetch(`https://flytographer-server.vercel.app/service`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          swal("Congratulations", "Service added successfully!", "success");
        }
      });
  };

  useTitle("AddService");

  return (
    <div>
      <h2 className="text-3xl font-semibold">Add New Service</h2>
      <form
        onSubmit={handleAddService}
        className="container mx-auto mt-10 px-5 mb-52 grid grid-cols-1 md:grid-cols-2 gap-9"
      >
        <input
          type="text"
          name="name"
          placeholder="Service name"
          className="input input-bordered w-full "
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full "
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Service price"
          className="input col-span-full input-bordered w-full "
          required
        />
        <textarea
          name="description"
          className="textarea col-span-full h-36 textarea-bordered"
          placeholder="Description"
          required
        ></textarea>
        <button
          type="submit"
          className="btn btn-warning col-span-full text-white"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
