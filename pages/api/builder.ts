import { createBuilder } from "@ibnlanre/portal";
import { transaction } from "./axios-config";
import {
  LogResponse,
  OverviewResponse,
  TableResponse,
  TransactionResponse,
} from "@/type";

export const builder = createBuilder({
  transaction: {
    surplies_forcast: () =>
      transaction.get<TableResponse>(`/api/v1/supplies/forecast`),
    lattest_transaction: () =>
      transaction.get<TransactionResponse>(`/api/v1/transactions/latest`),
    transaction_log: () =>
      transaction.get<LogResponse>(`/api/v1/transactions/payout-logs`),
    transaction_overview: () =>
      transaction.get<OverviewResponse>(`/api/v1/transactions/overview`),
  },
});
