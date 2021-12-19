import styled from 'styled-components';

const ContentWrapper = styled.main`
    padding: 1rem;
    background-color: #ebebeb;
    color: #333;
`;

export const Content = ({children}) => (
    <ContentWrapper>{children}</ContentWrapper>
)