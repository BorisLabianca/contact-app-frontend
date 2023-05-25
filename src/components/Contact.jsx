import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const Contact = ({ contact }) => {
  const { fullName, email, phoneNumber, image, birthDate } = contact;
  return (
    <div className="w-[17rem] shadow-md shadow-gray-400 overflow-hidden rounded-lg">
      <img
        src={image}
        alt="contactImg"
        className="w-full h-[12rem] object-cover"
      />
      <div className="p-3 text-sm flex flex-col gap-1 ">
        <p className="">Full Name: {fullName}</p>
        <p>Email: {email}</p>
        <p>Phone number: {phoneNumber}</p>
        <p>Date of birth: {birthDate}</p>
      </div>
      <div className="p-3 flex items-center justify-end gap-2">
        <button type="button" className="text-red-700 hover:opacity-75">
          <BsFillTrashFill />
        </button>
        <button
          type="button"
          className="text-xl text-blue-500 hover:opacity-75"
        >
          <AiFillEdit />
        </button>
      </div>
    </div>
  );
};

export default Contact;
