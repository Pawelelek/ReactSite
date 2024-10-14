import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import './Loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader-overlay">
      <CircularProgress />
    </div>
  );
};

export default Loader;
