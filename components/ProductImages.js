import styled from 'styled-components'
import { useState } from 'react'

const Image = styled.img`
  max-width: 95%;
  max-height: 80px;
  display: block;
  object-fit: cover;
  margin: 0 auto;
`
const BigImage = styled.img`
  max-width: 100%;
  max-height: 300px;
  height: 300px;
  display: block;
  object-fit: cover;
  margin: 0 auto;
`
const BigImageWrapper = styled.div`
  text-align: center;
  max-width: 95%;
  max-height: 320px;
  height: 320px;
  margin: 0 auto;
  display: block;
  margin: 0 auto;
  @media screen and (min-width: 635px) {
    text-align: center;
    max-width: 90%;
    max-height: 400px;
    margin: 0 auto;
    display: block;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    text-align: center;
    max-width: 95%;
    max-height: 400px;
    margin: 0 auto;
    display: block;
    margin: 0 auto;
  }
`
const ImageButtons = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-grow: 0;
  padding: 0 0.5rem;
  justify-content: flex-start;

  margin-top: 2rem;
`
const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active
      ? `border-color:#ccc;`
      : `
  border-color: transparent;`}
  height:fit-content;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
`
const SmallImagesDiv = styled.div`
  width: 120px;
  height: 90px;
  display: block;
  object-fit: cover;
  margin: 0 auto;
`
const Grid = styled.div`
  display: grid;
  place-items: center;
  margin: 0 auto;
  padding: 1rem;
  max-width: 100%;
  height: auto;
`
export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0])
  return (
    <>
      <Grid>
        <BigImageWrapper>
          <BigImage src={activeImage} />
        </BigImageWrapper>
        <ImageButtons>
          {images.map((image) => (
            <ImageButton
              key={image}
              active={image === activeImage}
              onClick={() => setActiveImage(image)}>
              <SmallImagesDiv>
                <Image src={image} alt={image} />
              </SmallImagesDiv>
            </ImageButton>
          ))}
        </ImageButtons>
      </Grid>
    </>
  )
}
