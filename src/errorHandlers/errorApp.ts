export class ErrorApp extends Error {
  path?: string;
  status?: number;
  response?: any;
  constructor({
    message,
    path,
    status,
    response,
  }: {
    message?: ErrorApp["message"];
    path?: ErrorApp["path"];
    status?: ErrorApp["status"];
    response?: ErrorApp["response"];
  }) {
    super(message);
    this.path = path;
    this.status = status;
    this.response = response;
  }
}
