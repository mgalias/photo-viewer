import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
    background-color: #fff;
    color: #333;
`;

const LogoWrapper = styled.div`
    font-size: 80px;
    text-align: center;
    color: #fff;
    padding: 2rem 0;
    background: #2addef;
    font-family: 'Kaushan Script', cursive;
`;

const Navigtion = styled.nav`
    display: flex;
    flex-flow: row wrap;
    padding: 1rem;
    text-transform: uppercase;

    a {
        color: inherit;
    }
`;

export const Header = ({ navigation }) => (
    <HeaderWrapper>
        <LogoWrapper>
            Photo Viewer
        </LogoWrapper>
        <Navigtion>
            {navigation.map(link => (
                <Link key={link.href} to={link.href}>{link.title}</Link>
            ))}
        </Navigtion>
    </HeaderWrapper>
)