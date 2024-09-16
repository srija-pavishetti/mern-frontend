import React, { useState } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/material';

export const ProductBanner = ({ images }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Box
        component="img"
        sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
        src={images[activeStep]}
        alt={`Banner Image ${activeStep}`}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <IconButton
            onClick={handleNext}
            disabled={maxSteps <= 1}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        }
        backButton={
          <IconButton
            onClick={handleBack}
            disabled={maxSteps <= 1}
          >
            <ArrowBackIosIcon />
          </IconButton>
        }
      />
    </div>
  );
};
