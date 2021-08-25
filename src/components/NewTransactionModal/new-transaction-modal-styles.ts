import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 3.5rem;
    background-color: var(--green);
    color: var(--background);
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 300ms;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
    height: 3.5rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: border-color 200ms;
    
    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
      height: 20px;
      width: 20px;
    }

    span {
      color: var(--text-title);
      font-size: 1rem;
    }
  }
`;