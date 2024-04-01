import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dq6kfxamf/image/upload",
      data
    );

    const { url } = res.data;
    console.log(res);
    return url;
  } catch (error) {
    console.log(error);
  }
};
export default upload;
