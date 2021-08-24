import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./transactions-table-styles";

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data))
  }, []);
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Criação site</td>
            <td className="deposit">R$12.000</td>
            <td>Design</td>
            <td>20/08/2021</td>
          </tr>
          <tr>
            <td>Supermercado</td>
            <td className="withdraw">-R$800</td>
            <td>Design</td>
            <td>20/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}