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
  max-width: 100%;
  max-height: 320px;
  height: 320px;
  margin: 0 auto;
  object-fit: cover;
  display: block;
  img {
    max-width: 100vw;
    height: auto;
    display: block;
    align-items: center;
    margin: 0 auto;
  }
  @media screen and (min-width: 635px) {
    text-align: center;
    width: 100%;
    max-height: 400px;
    margin: 0 auto;
    display: block;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    text-align: center;
    width: 100%;
    max-height: 400px;
    margin: 0 auto;
    display: block;
    object-fit: cover;
  }
`
const ImageButtons = styled.div`
  display: flex;
  gap: 0.5rem 0.15rem;
  padding: 0;
  flex: 0 0 20%;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem auto;
  /* flex-flow: row wrap; */
`
const ImageButton = styled.div`
  border: 2px solid #ccc;
  display: flex;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
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
  width: 60px;
  /* width: 15vw; */
  height: 80px;
  display: flex;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  padding: 0;
  img {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    text-align: center;
    max-width: 100%;
    width: 7vw;
    max-height: 400px;
    margin: 0 auto;
    display: block;
    object-fit: cover;
  }
`
const Grid = styled.div`
  display: grid;
  place-items: center;
  margin: 0 auto;
  padding: 0;
  max-width: 100vw;
  height: inherit;
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
