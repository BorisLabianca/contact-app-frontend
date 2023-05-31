import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";
import { removeContact } from "../fetchContact/FetchContact";
import { ContactContextShare } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Contact = ({ contact }) => {
  const navigate = useNavigate();
  const { fullName, email, phoneNumber, image, birthDate, _id } = contact;
  const { update, setUpdate } = ContactContextShare();
  const folder = import.meta.env.VITE_IMAGE_URL;
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation(
    ["contact", _id],
    removeContact,
    {
      onSuccess: () => queryClient.invalidateQueries("contact"),
    }
  );

  const handleUpdate = () => {
    setUpdate(contact);
    navigate("/add");
  };
  if (isError) return "Something went wrong.";
  return (
    <div className="w-[17rem] shadow-md shadow-gray-400 overflow-hidden rounded-lg">
      <img
        src={folder + image}
        alt="contactImg"
        className="w-full h-[12rem] object-cover"
      />
      <div className="p-3 text-sm flex flex-col gap-1 ">
        <p className="">Full Name: {fullName}</p>
        <p>Email: {email}</p>
        <p>Phone number: {phoneNumber}</p>
        <p>Date of birth: {birthDate.split("T")[0]}</p>
      </div>
      <div className="p-3 flex items-center justify-end gap-2">
        <button
          type="button"
          className="text-red-700 hover:opacity-75"
          onClick={() => mutate(_id)}
        >
          <BsFillTrashFill />
        </button>
        <button
          type="button"
          className="text-xl text-blue-500 hover:opacity-75"
          onClick={handleUpdate}
        >
          <AiFillEdit />
        </button>
      </div>
    </div>
  );
};

export default Contact;
