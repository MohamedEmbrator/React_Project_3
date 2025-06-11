import { Close } from "@mui/icons-material";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
  const [allData, setAllData] = useState([]);
  let totalAmmount = 0;
  useEffect(() => {
    fetch("https://understood-bush-mandible.glitch.me/transactions")
      .then((result) => {
        let data = result.json();
        return data;
      })
      .then((data) => {
        setAllData(data);
      });
  }, [allData]);
  return (
    <Box>
      {allData.map((el, index) => {
        totalAmmount += el.price;
        return (
          <Paper
            key={index}
            elevation={4}
            sx={{
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
              position: "relative"
            }}
          >
            <Typography variant="h6" sx={{ ml: "16px", fontSize: "1.3em" }}>
              {el.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mr: "16px",
                fontSize: "1.4em",
                fontWeight: 500,
                opacity: "0.8"
              }}
            >
              ${el.price}
            </Typography>
            <IconButton
              sx={{ position: "absolute", top: "0", right: "0" }}
              onClick={() => {
                fetch(`https://understood-bush-mandible.glitch.me/transactions${el.id}`, {
                  method: "DELETE"
                });
              }}
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}
      <Typography
        variant="h5"
        sx={{
          mt: "16px",
          textAlign: "center"
        }}
      >
        Total Amount: ${totalAmmount}
      </Typography>
    </Box>
  );
};

export default Home;
