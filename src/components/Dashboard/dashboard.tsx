import { Summary } from "../Summary/summary";
import { TransactionsTable } from "../TransactionsTable/transactions-table";
import { Container } from "./dashboard-styles";

export function Dashboard() {
  return (
   <Container>
     <Summary />
     <TransactionsTable />
   </Container>
  );
}