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
  // if (data?.image) {
  //   const formData = new FormData();
  //   const imageName = Date.now() + data.image.name;
  //   formData.append("name", imageName);
  //   formData.append("file", data.image);
  //   data.image = imageName;

  //   try {
  //     await axios.post(`${baseURL}/api/upload`, formData);
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }
  try {
    console.log(data);
    const formData = new FormData();
    // const imageName = Date.now() + data.image.name;
    formData.append("file", data.image);
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("birthDate", data.birthDate);
    const response = await axios.post(
      `${baseURL}/api/contact/create`,
      formData
    );
    return response.newContact;
  } catch (error) {
    throw new Error(error);
  }
};

export const removeContact = async (id) => {
  try {
    await axios.delete(`${baseURL}/api/contact/delete/${id}`);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateContact = async (data) => {
  console.log("From update: ", data.image);
  try {
    const newFormData = new FormData();
    // const imageName = Date.now() + data.image.name;
    newFormData.append("file", data.image);
    newFormData.append("fullName", data.fullName);
    newFormData.append("email", data.email);
    newFormData.append("phoneNumber", data.phoneNumber);
    newFormData.append("birthDate", data.birthDate);
    const response = await axios.put(
      `${baseURL}/api/contact/update/${data._id}`,
      newFormData
    );
    console.log(response);
    // return response.newContact;
  } catch (error) {
    throw new Error(error);
  }
};
