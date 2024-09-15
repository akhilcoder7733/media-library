  import React, { useState } from 'react';
  import { Button, IconButton, Typography, Grid, Card, CardContent, CardMedia, Tooltip, Box, createTheme, ThemeProvider } from '@mui/material';
  import { AddAPhotoOutlined, DeleteOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';
import CustomButton from './CustomButton';

  const StyledCard = styled(Card)`
  max-width: 300px; /* Set fixed width */
  max-height: 500px; /* Set fixed height */
  margin: 10px auto; /* Center the card horizontally and add margin */
  border-radius: 5px; /* Add rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
  background-color: pink;
  padding: 10px;
`;

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection:"column",
  padding: 1,
  gap: 3,
  // backgroundColor: "yellow",
  [theme.breakpoints.down("sm")]:{
    
  }
}));


const StyledDiv = styled("div")(({ theme }) => ({
  backgroundImage:"linear-gradient(52deg, rgba(211,197,229,1) 29%, rgba(93,142,165,1) 86%)",
  minHeight:"1000px",
  paddingTop:"60px",
  // backgroundColor: "yellow",
  [theme.breakpoints.down("sm")]:{
    
  }
}));

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600, // Adjust breakpoint for small screens as needed
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

  const MediaLibrary = () => {
    const [images, setImages] = useState([]);

    const handleSelectImage = (event) => {
      const selectedFile = event.target.files[0];
      if (!selectedFile) return;

      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
    };

    const handleDeleteImage = (index) => {
      setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const handleDeleteAll = () => {
      setImages([]);
    };

    return (
      <ThemeProvider theme={theme}>
      <StyledDiv>
        <StyledBox>
          <Typography variant="h1" gutterBottom style={{fontFamily:"Protest Guerrilla, sans-serif", color:"#870fb5"}}>
            Media Library
          </Typography>
          <Typography variant='subtitle1'>Please select image to show.</Typography>
          <Typography variant='subtitle1'>By</Typography>
          <Typography variant='subtitle1' style={{fontFamily:"Protest Guerrilla, sans-serif"}}>Akhil John</Typography>
          {images.length > 0 ? (
    <CustomButton variant="contained" component="label" sx={{ mb: 2 }}>
  <AddAPhotoOutlined sx={{ mr: 1 }} />
  Add more Images
  <input type="file" hidden accept="image/*" onChange={handleSelectImage} />
</CustomButton>
  ) : (
    <CustomButton variant="contained" component="label" sx={{ mb: 2 }}>
  <AddAPhotoOutlined sx={{ mr: 1 }} />
  Select Image
  <input type="file" hidden accept="image/*" onChange={handleSelectImage} />
</CustomButton>
  )}
        </StyledBox>
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={4} key={index}>
              <StyledCard>
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Image ${index + 1}`}
                  height="160"
                />
                <CardContent>
                  <IconButton onClick={() => handleDeleteImage(index)} aria-label="delete">
                    <Tooltip title="Delete">
                      <DeleteOutlined />
                    </Tooltip>
                  </IconButton>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        {/* Conditionally render the Delete All button based on images.length */}
        {images.length > 0 ? (
          <StyledBox>
            <Button variant="contained" color="error" sx={{ mt: 2 }} onClick={handleDeleteAll} disabled={!images.length}>
              Delete All
            </Button>
          </StyledBox>
        ) : (
          <StyledBox>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
            No Images Found
          </Typography>
          </StyledBox>
        )}
      </StyledDiv>
    </ThemeProvider>

    );
  };

  export default MediaLibrary;




 