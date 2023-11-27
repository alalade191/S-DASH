//TYPES FOR LATTEST TRANSACTION
export interface TransactionResponse {
  data: LattestTransaction[];
}

export interface LattestTransaction {
  created_at: Date;
  charged_by: TransactionChargedBy;
  charge: TransactionCharge;
}

export interface TransactionCharge {
  amount: number;
  currency: TransactionCurrency;
  type: string;
}

export interface TransactionCurrency {
  code: string;
  sign: string;
}

export interface TransactionChargedBy {
  company: string;
  logo: string;
}

//TYPES FOR TOTAL POINT TABLE
export interface TableResponse {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: TableData[];
}

export interface TableData {
  actual_value: number;
  forecasted_value: number;
  name: string;
  q1_variance: number;
  q2_variance: number;
  q3_variance: number;
  q4_variance: number;
}

//TYPES FOR TRANSACTION OVERVIEW
export interface OverviewResponse {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: OverviewData[];
}

export interface OverviewData {
  name: string;
  current: number;
  last_month: number;
}

//TYPES FOR TRANSACTION LOG
export interface LogResponse {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: Log[];
}

export interface Log {
  date: Date;
  salary_paid: number;
  cash_bond_bought: number;
}
