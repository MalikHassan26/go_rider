export interface Pagination {
  to: number;
  from: number;
  total: number;
  per_page: number;
  last_page: number;
  current_page: number;
}