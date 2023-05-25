import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const navigate = useNavigate();

  return (
    <section>
      <button
        className="absolute top-[2rem] left-[4rem] button px-5 text-sm"
        onClick={() => navigate("/")}
      >
        Go Back
      </button>
      <div className="flex items-center justify-center h-screen">
        <form className="border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md shadow-md shadow-gray-400 m-5 lg:m-0">
          <h1 className="text-center text-xl font-medium">Add Contact</h1>
          <input className="input" type="text" placeholder="Full Name..." />
          <input className="input" type="email" placeholder="Email..." />
          <input className="input" type="text" placeholder="Phone Number..." />
          <input className="input" type="Date" />
          <input type="file" />
          <button className="button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default AddContact;
