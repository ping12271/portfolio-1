import React from "react";
import styled from "styled-components";

const WorksItem = ({image, title, description, tags, url}) => {

    return (
        <Container href={url} target={'_blank'}>
            <Thumb>
                <img src={image} alt=""/>
            </Thumb>
            <Description>
                <h3>{title}</h3>
                <p>{description}</p>
            </Description>
            <Tags>
                {
                    tags.map((item) => <div>{item}</div>)
                }
            </Tags>
        </Container>
    )
}

const Container = styled.div`

`;

const Thumb = styled.div`
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  img {
    transition: 1s;
  }

`;

const Description = styled.div`
  margin-top: 16px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: #767676;
    margin: 14px 0;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    padding: 4px 8px 2px;
    border-radius: 2px;
    background: #eee;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

export default WorksItem;