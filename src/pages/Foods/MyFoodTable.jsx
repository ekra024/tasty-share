import axios from "axios";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyFoodTable = ({ food }) => {
  const { _id, name, photo, date, quantity, status } = food;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://tasty-share-server.vercel.app/foods/${_id}`, food)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        {" "}
        <img className="w-10 h-8" src={photo} alt="" />{" "}
      </td>
      <td>{status}</td>
      <td>{quantity}</td>
      <td>{date}</td>
      <td>
        {" "}
        <Link
          to={`/update/${_id}`}
          className="bg-green-500 text-white px-2 rounded-md"
        >
          Edit
        </Link>{" "}
      </td>
      <td>
        {" "}
        <button onClick={handleDelete}>
          {" "}
          <MdDelete className="text-xl text-red-600" />{" "}
        </button>{" "}
      </td>
    </tr>
  );
};

export default MyFoodTable;
