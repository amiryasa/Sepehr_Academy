import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import "./Paginate.css";

const Paginate = () => {
  const theme = createTheme({
    palette: {
      info: {
        main: "#00ADEF",
        light: "#00ADEF",
        dark: "#2AC4FF",
        contrastText: "#fff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={1} alignItems="center">
        <Pagination count={10} color="info" boundaryCount={1} siblingCount={0} showFirstButton showLastButton className='paginationHolder' />
      </Stack>
    </ThemeProvider>
  );
};

export { Paginate };
