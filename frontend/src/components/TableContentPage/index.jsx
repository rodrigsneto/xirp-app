import styled from "styled-components";

export const PageContentArea = styled.div`
  margin: 15px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  padding: 10px 0;
  flex-direction: column;
`

export const Title = styled.h2`
  margin: 0 10px 10px 10px;
  font-weight: 400;
`
export const Table = styled.table`
  word-break: break-all;
  width: 100%;

  caption {
    display: none;
  }
`
export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const Tr = styled.tr`
  &:hover {
  background-color: #F4F5F7;
  cursor: pointer;
  }`

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  padding: 10px;
  background-color: #f5f7f9;
  font-weight: 400;

`
export const Td = styled.td`
  padding: 10px;
  text-align: "center";
  width: "auto";
  font-weight: 100;

  a {
    display: flex;
    text-decoration: none;
    color: black;
  }
`
export const StatusAguardandoReparo = styled.div`
  padding: 5px;
  background-color: orange;
  border-radius: 8px;
  display: inline;
`
