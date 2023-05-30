import axios from "axios";

const baseURL = import.meta.env.VITE_BASEURL;

export const getAllData = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/contact`);
    return res.data.allContacts;
  } catch (error) {
    console.log("getAllData Function in FetchContact: ", error);
  }
};

export const addContact = async (data) => {
  if (data?.image) {
    const formData = new FormData();
    const imageName = Date.now() + data.image.name;
    formData.append("name", imageName);
    formData.append("file", data.image);
    data.image = imageName;

    try {
      await axios.post(`${baseURL}/api/upload`, formData);
    } catch (error) {
      throw new Error(error);
    }
  }
  try {
    const response = await axios.post(`${baseURL}/api/contact/create`, data);
    return response.newContact;
  } catch (error) {
    throw new Error(error);
    console.log("addContact Function in FetchContact: ", error);
  }
};
