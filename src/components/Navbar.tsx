import { useState } from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaBeerMugEmpty, FaHouse } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 59px 100px;

  @media (max-width: 860px) {
    padding: 39px 80px;
  }
`;

const StyledUL = styled.ul<{ menuIsOpen: boolean }>`
  position: relative;
  z-index: 10; /* acima do backdrop */

  display: flex;
  gap: 48px;
  list-style: none;
  padding: 0px;

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }

  @media (max-width: 860px) {
    ${({ menuIsOpen }) =>
      !menuIsOpen &&
      `
        display: none;
    `};
    flex-direction: column;
    width: 100%;
  }
`;

const Menu = styled.div`
  display: none;

  @media (max-width: 860px) {
    display: flex;
  }
`;

const TopRow = styled.div`
  position: relative;
  z-index: 20; /* acima do backdrop */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 860px) {
    width: 100%;
    flex: 1;
  }
`;

const Backdrop = styled.div<{ menuIsOpen: boolean }>`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.2);
  z-index: 5;

  display: ${({ menuIsOpen }) => (menuIsOpen ? "block" : "none")};

  @media (min-width: 861px) {
    display: none; /* só existe no mobile */
  }
`;

const HowToOrder = styled.p<{ menuIsOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  position: relative;
  z-index: 20; /* acima do backdrop */

  @media (max-width: 860px) {
    ${({ menuIsOpen }) =>
      !menuIsOpen &&
      `
        display: none;
    `};
    width: 100%;
  }
`;

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <StyledNavbar>
      <Backdrop menuIsOpen={menuIsOpen} />
      <TopRow>
        <h2>Alcohol</h2>
        <Menu onClick={() => setMenuIsOpen(!menuIsOpen)}>
          {menuIsOpen ? <IoClose size={32} /> : <HiMenuAlt3 size={32} />}
        </Menu>
      </TopRow>
      <StyledUL menuIsOpen={menuIsOpen}>
        <li>
          <FaHouse />
          Home
        </li>
        <li>
          <FaBeerMugEmpty />
          Products
        </li>
        <li>
          <BsFillBuildingsFill />
          Branches
        </li>
      </StyledUL>
      <HowToOrder menuIsOpen={menuIsOpen}>
        <FiPackage />
        How to order?
      </HowToOrder>
    </StyledNavbar>
  );
}
