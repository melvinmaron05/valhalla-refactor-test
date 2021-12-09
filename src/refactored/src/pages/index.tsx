import React, { useState, useEffect } from "react"
import { parse as parseQS } from 'query-string'

import { styled,  createTheme, ThemeProvider, AppBar, Toolbar, Typography, Button, Box, LinearProgress, ImageList, ImageListItem, Container } from "@mui/material";

const theme = createTheme({ });

const Download = styled('div')(
  ({ theme }) => ({
    transition: '.5s ease',
    opacity: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  })
)

const ImageItem = styled('img')(
  ({ theme }) => ({
    height: '100%',
    'object-fit': 'cover', 
    width: '100%',
    opacity: 1,
    display: 'block',
    transition: '.5s ease',
    'backface-visibility': 'hidden',
  })
)

const ImageCell = styled(ImageListItem)(
  ({ theme }) => ({

    '&:hover img': {
      opacity: 0.3
    },

    '&:hover div': {
      opacity: 1
    }
  })
)

function titleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

const getImages = async (type: 'nature' | 'architecture' | 'fashion', page: number) => {
  return (await fetch(`http://localhost:8888/images?category=${type}&page=${page}`)).json();
}

// markup
const IndexPage = (props) => {
  const { type, page } = parseQS(props.location.search);


  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<{ url: string, name: string}[]>();

  useEffect(() => {

    setLoading(true);

    (async () => {
      const toPage = (Number(page || '1')*3);

      let result = await getImages(type as "nature" | "architecture" | "fashion" || 'nature', toPage - 2);
      setImages(result)
      result = result.concat(await getImages(type as "nature" | "architecture" | "fashion", toPage - 1))
      setImages(result)
      result = result.concat(await getImages(type as "nature" | "architecture" | "fashion", toPage))

      setImages(result)
      setLoading(false);
    })()

  }, [type, page]);

  return (
    <React.StrictMode>

      <ThemeProvider theme={theme} >
        <AppBar>
          <Toolbar>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Photo Sharing App</Typography>


            <Button href="/?type=nature" color="inherit">Nature</Button>
            <Button href="/?type=architecture" color="inherit">Architecture</Button>
            <Button href="/?type=fashion" color="inherit">Fasion</Button>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor"/>
        <Container>
          <Typography variant="h4">{titleCase(type || 'nature')} Photos</Typography>
          {loading && <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>}
          {images && images.length &&
          <ImageList sx={{ height: '100vw'}} cols={3} rowHeight={400}>
            {images.map((img) => (
              <ImageCell key={img.name}>
                <ImageItem
                  src={img.url}
                  alt={img.name}
                  loading="lazy"
                />
                <Download>
                  <Button href={img.url} download={img.name} color="inherit">Download</Button>
                </Download>
              </ImageCell>
            ))}
          </ImageList>}
          
          {Number(page || '1') > 1 && <Button href={`/?type=${type}&page=${Number(page || '1') + 1}`} color="inherit">Previous</Button>}
          {images && images.length && <Button href={`/?type=${type}&page=${Number(page || '1') + 1}`} color="inherit">Next</Button>}
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default IndexPage
