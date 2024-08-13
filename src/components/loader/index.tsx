import Backdrop from "@mui/material/Backdrop/Backdrop";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

const Loader = () => {
  return (
    // <div>
    //   {/* <Backdrop
    //     sx={{ color: "#171717", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    //     open={true}
    //   >
    //     <CircularProgress color="inherit" />
    //   </Backdrop> */}
    // </div>
    <CircularProgress color="inherit" />
  );
};

export default Loader;
