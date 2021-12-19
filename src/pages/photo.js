import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPhoto } from '../api';

const ImageWrapper = styled.div`
    width: 100%;

    img {
        width: 100%;
    }

    p {
        text-align: center;
        color: #333;
        font-size: 18px;
    }
`;

export const Photo = () => {
    const { photoId } = useParams();
    const [data, setData] = useState({});
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        getPhoto(photoId).then(image => {
            setData(image);
        })
    }, [photoId]);

    const toggleLike = () => setIsLiked(!isLiked);

    return (
        <ImageWrapper>
            <p>{data.description ?? data.alt_description}</p>
            <p onClick={toggleLike}>{isLiked ? 'I like it' : 'I hate it'}</p>
            <img src={data.urls?.regular} alt={data.alt_description ?? data.description ?? ''} />
        </ImageWrapper>
    );
}