import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import { useQuery } from "react-query";
import { getAllData } from "../fetchContact/FetchContact";

const data1 = [
  {
    _id: "646f700d97cff754095d2c5e",
    fullName: "Jane Doe Updated",
    email: "jane.doe.updated@mail.com",
    phoneNumber: 87654321,
    image:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBc5CQyFcxAzY1ZRW.jpg",
    birthDate: null,
  },
  {
    _id: "646f700d97cff754095d2c5f",
    fullName: "John Goodman",
    email: "john.goodman@mail.com",
    phoneNumber: 87654321,
    image:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBc5CQyFcxAzY1ZRW.jpg",
    birthDate: null,
  },
  {
    _id: "646f700d97cff754095d2c5g",
    fullName: "Anthony Hopkins",
    email: "a.h@mail.com",
    phoneNumber: 87654321,
    image:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBc5CQyFcxAzY1ZRW.jpg",
    birthDate: null,
  },
  {
    _id: "646f700d97cff754095d2c5h",
    fullName: "Ella Fitzgerald",
    email: "ella@mail.com",
    phoneNumber: 87654321,
    image:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBc5CQyFcxAzY1ZRW.jpg",
    birthDate: null,
  },
  {
    _id: "646f700d97cff754095d2c5i",
    fullName: "Emily Blunt",
    email: "emblunt@mail.com",
    phoneNumber: 87654321,
    image:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBc5CQyFcxAzY1ZRW.jpg",
    birthDate: null,
  },
  {
    _id: "646f700d97cff754095d2c5j",
    fullName: "Patrick Swayze",
    email: "swayze@mail.com",
    phoneNumber: 87654321,
    image:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBc5CQyFcxAzY1ZRW.jpg",
    birthDate: null,
  },
];

const Contacts = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery("contact", getAllData);
  console.log(data);
  return (
    <div className="w-[80%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400 rounded-lg">
      <h1 className="p-6 text-center flex-1 text-2xl font-bold text-gray-700">
        Contact Application
      </h1>
      <div className="text-right mr-10">
        <button
          type=""
          className="button text-sm px-4"
          onClick={() => navigate("/add")}
        >
          Add Contact
        </button>
      </div>
      <div className="p-4 lg:p-7 flex items-center flex-wrap gap-5 mx-auto w-[95%]">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong.</p>}

        {data?.length === 0 ? (
          <p>No contact exist.</p>
        ) : (
          data?.map((contact, index) => {
            return <Contact contact={contact} key={contact._id} />;
          })
        )}
      </div>
    </div>
  );
};

export default Contacts;
