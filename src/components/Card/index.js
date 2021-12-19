import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardWrapper = styled.div`
    background: #fff;
    background-image: url(${props => props.coverPhoto});
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #777;
    padding: 1rem;
    height: 250px;
    cursor: pointer;
    box-shadow: 8px 8px rgba(66, 68, 90, 1);
    border-radius: 5px;
`;

const TextWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 1rem;
`;

export const Card = ({ title, pathname, photosNumber, coverPhoto }) => (
    <CardWrapper coverPhoto={coverPhoto}>
        <Link to={pathname}>
            {(title || photosNumber) && (
                <TextWrapper>
                    {title && <h3>{title}</h3>}
                    {photosNumber && <p>Total photos: {photosNumber}</p>}
                </TextWrapper>
            )}
        </Link>
    </CardWrapper>
);