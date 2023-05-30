import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { addContact } from "../../fetchContact/FetchContact";

const AddContact = () => {
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    image: "",
    birthDate: "",
  });

  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation(addContact, {
    onSuccess: () => queryClient.invalidateQueries("contact"),
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    mutate(contact);
    navigate("/");
  };

  return (
    <section>
      <button
        className="absolute top-[2rem] left-[4rem] button px-5 text-sm"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <div className="flex items-center justify-center h-screen">
        <form
          className="border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md shadow-md shadow-gray-400 m-5 lg:m-0"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-xl font-medium">Add Contact</h1>
          <input
            value={contact.fullName}
            onChange={(event) =>
              setContact({ ...contact, fullName: event.target.value })
            }
            className="input"
            type="text"
            placeholder="Full Name..."
          />
          <input
            value={contact.email}
            onChange={(event) =>
              setContact({ ...contact, email: event.target.value })
            }
            className="input"
            type="email"
            placeholder="Email..."
          />
          <input
            value={contact.phoneNumber}
            onChange={(event) =>
              setContact({ ...contact, phoneNumber: event.target.value })
            }
            className="input"
            type="text"
            placeholder="Phone Number..."
          />
          <input
            value={contact.birthDate}
            onChange={(event) =>
              setContact({ ...contact, birthDate: event.target.value })
            }
            className="input"
            type="Date"
          />
          <input
            onChange={(event) =>
              setContact({ ...contact, image: event.target.files[0] })
            }
            type="file"
            accept="image/jpg, image/jpeg, image/png"
          />
          <button className="button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default AddContact;
