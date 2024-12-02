import { Box } from "@mui/material";
import StickyHeadTable from "./Componentes/Table";
import { TextField } from "@mui/material";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <TextField
            label="Search Dashboard"
            variant="outlined"
            onChange={handleSearch}
            value={search}
          />
        </Box>
        <StickyHeadTable search={search} />
      </Box>
    </Box>
  );
}

export default App;
