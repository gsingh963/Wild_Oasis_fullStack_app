import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { createPortal } from "react-dom";
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

function Modal({ children, onClose }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>
        <div>{children}</div>
      </StyledModal>
      ;
    </Overlay>,
    document.body
  );
}

export default Modal;

// here we have used the React Portal feature which is used in Reactjs to render a children component outside of the parent component and render it where we want in the Dom Tree.

// here definition of React portal ->React Portal is a feature in React.js that allows you to render children components into a DOM node that exists outside of the parent component's DOM hierarchy. This means you can render components to a different part of the DOM tree, such as the body, or any other container element, regardless of where the parent component is located in the DOM.React Portals are useful for scenarios where you need to render a component at a higher level in the DOM tree or when you want to render a component outside of its parent's context, such as modals, tooltips, or dropdown menus. By using portals, you can ensure that these components are not constrained by their parent's styles, positioning, or other properties.
