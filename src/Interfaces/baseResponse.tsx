export interface IBaseResponse {
  ResponseHeader: {
    ResponseCode: number;
    ResponseMessage: string;
  };
  data?: any;
}
