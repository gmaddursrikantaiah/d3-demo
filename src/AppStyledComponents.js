import {
    Select,
    Flex
} from 'pcln-design-system';
import styled from 'styled-components';

const Header = styled(Flex)`
    background-color: cadetblue;
`;

const GraphType = styled(Select)`
    margin-left: 4.9%;
    padding-top: 1%;
    margin-top: 1%;
    width: 52em;
    color: black;
    margin-bottom: 1em;
    font-weight: 600;
    border-color: black;
`;

const GraphSection = styled(Flex)`
    margin-top: 1%;
    width: 50%;
    font-size: 0.7em;
`;

const Footer = styled(Flex)`
    background-color: cadetblue;
    height: 2em;
`;

export {
    GraphType,
    GraphSection,
    Header,
    Footer
}