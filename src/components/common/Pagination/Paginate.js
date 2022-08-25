import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import styles from "./Paginate.module.css";

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
      <Stack spacing={2} alignItems="center">
        <Pagination count={5} color="info" showFirstButton showLastButton className={styles.paginationHolder} />
      </Stack>
    </ThemeProvider>
  );
};

export { Paginate };
