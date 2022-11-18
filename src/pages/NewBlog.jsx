import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AddUser } from "../helper/functions";
const NewBlog = () => {
  const { currentUser } = useContext(AuthContext);

  // console.log(currentUser)

  const [newblogInput, setNewblogInput] = useState({
    title: "",
    photoUrl: "",
    content: "",
    email: currentUser.email,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setNewblogInput({ ...value, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log("sasasa")
    e.preventDefault();

    AddUser(newblogInput);
  };

  return (
    <Box
      noValidate
      autoComplete="off"
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        height: "760px",
        boxShadow: 12,
        borderRadius: "20px",
        margin: "auto",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      <img
        width="300px"
        src="https://img.freepik.com/free-vector/add-files-concept-illustration_114360-341.jpg?w=740&t=st=1668774252~exp=1668774852~hmac=5bc77556396d41bb1ca82647cb8dc512c1ed81633eef2c808c35de2e42e679b8"
        alt=""
      />
      <TextField
        id="outlined-basic"
        label="New Post Title *"
        variant="outlined"
        margin="normal"
        name="title"
        value={newblogInput.title}
        onChange={handleChange}
        sx={{ width: "400px" }}
      />
      <TextField
        id="outlined-basic"
        label="Image URL *"
        variant="outlined"
        margin="normal"
        name="photoUrl"
        onChange={handleChange}
        value={newblogInput.photoUrl}
        sx={{ width: "400px" }}
      />
      <TextField
        id="outlined-basic"
        label="Content *"
        variant="outlined"
        margin="normal"
        name="content"
        value={newblogInput.content}
        onChange={handleChange}
        sx={{
          width: "400px",
          "& .MuiInputBase-root": {
            height: "200px",
          },
        }}
      />
      <Button
        onClick={handleSubmit}
        type="submit"
        sx={{ width: "400px" }}
        variant="contained"
      >
        Submit
      </Button>
    </Box>
  );
};
export default NewBlog;
