import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Home from "./pages/Home";
import { pdfjs } from "react-pdf";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const App = () => {
  useEffect(() => {
    let AOS: any;

    import("aos").then((module) => {
      AOS = module.default;
      AOS.init({
        duration: 1000,
        once: true,
      });
    });

    return () => {
      if (AOS && typeof AOS.refreshHard === "function") {
        AOS.refreshHard();
      }
    };
  }, []);

  const theme = createTheme({
    breakpoints: {
      xs: "320px",
      sm: "476px",
      md: "640px",
      bs: "768px",
      lg: "900px",
      xl: "1024",
      "2xl": "1280",
    },
  });

  return (
    <MantineProvider theme={theme}>
      <Toaster position="top-center" reverseOrder={false} />
      <Home />
    </MantineProvider>
  );
};

export default App;
