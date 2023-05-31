import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { addContact, updateContact } from "../../fetchContact/FetchContact";
import { ContactContextShare } from "../../context/Context";

const AddContact = () => {
  const navigate = useNavigate();
  const { update, setUpdate } = ContactContextShare();
  console.log(update);

  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    image: "",
    birthDate: "",
  });

  useEffect(() => {
    if (update) {
      setContact({
        ...contact,
        fullName: update.fullName,
        email: update.email,
        phoneNumber: update.phoneNumber,
        image: update.image,
        birthDate: update.birthDate.split("T")[0],
        _id: update._id,
      });
    }
  }, []);

  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation(addContact, {
    onSuccess: () => queryClient.invalidateQueries("contact"),
  });

  const {
    mutate: updateSingleContact,
    isLoading: updateLoading,
    isError: updateError,
  } = useMutation(updateContact, {
    onSuccess: () => queryClient.invalidateQueries("contact"),
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (update) {
      updateSingleContact(contact);
      setUpdate(null);
      navigate("/");
    } else {
      mutate(contact);
      navigate("/");
    }
  };
  if (isError) return "Something went wrong.";

  return (
    <section>
      <button
        className="absolute top-[2rem] left-[4rem] button px-5 text-sm"
        onClick={() => {
          update && setUpdate(null);
          navigate(-1);
        }}
      >
        Go Back
      </button>
      <div className="flex items-center justify-center h-screen">
        <form
          className="border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md shadow-md shadow-gray-400 m-5 lg:m-0"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-xl font-medium">
            {update ? "Update Contact" : "Add Contact"}
          </h1>
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
          <button className="button">{update ? "Update" : "Submit"}</button>
        </form>
      </div>
    </section>
  );
};

export default AddContact;
