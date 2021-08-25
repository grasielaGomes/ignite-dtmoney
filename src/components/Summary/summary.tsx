import { Container } from "./summary-styles";
import expenseImg from "../..//assets/expense.svg";
import incomeImg from "../..//assets/income.svg";
import totalImg from "../..//assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContexts";

export function Summary() {

  const data = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={expenseImg} alt="Saídas" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className="highlight-card">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}