import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { AttachMoney, Done } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Create = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  function onSubmit({ price, title }) {
    price = +price;
    fetch("https://understood-bush-mandible.glitch.me/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ price, title })
    });
    navigate("/");
  }
  return (
    <Box
      component="form"
      sx={{ width: "380px" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        fullWidth
        label="Name"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">👉</InputAdornment>
          }
        }}
        variant="filled"
        {...register("title", {
          required: { value: true, message: "This Field is required" },
          minLength: { value: 3, message: "Minmun length is 3 characters" }
        })}
        error={Boolean(errors.title)}
        helperText={
          Boolean(errors.title) ? errors.title?.message.toString() : null
        }
      />
      <TextField
        fullWidth
        label="Price"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoney />
              </InputAdornment>
            )
          }
        }}
        variant="filled"
        {...register("price", { required: {value: true, message: "This Field is required"} })}
        error={Boolean(errors.price)}
        helperText={
          Boolean(errors.price) ? errors.price?.message.toString() : null
        }
      />
      <Button
        type="submit"
        variant="contained"
        endIcon={<Done />}
        sx={{ mt: "22px" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Create;
