import styled from 'styled-components';

const CollectionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const Collection = ({ children }) => <CollectionWrapper>{children}</CollectionWrapper>;
