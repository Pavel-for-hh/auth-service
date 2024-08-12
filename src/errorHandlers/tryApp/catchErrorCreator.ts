import { ErrorApp } from "../errorApp";

export const catchErrorCreator = (path: string) => (err: unknown) => {
  if (err instanceof ErrorApp) {
    err.path = err.path ? `${path}/${err.path}` : path;
    throw err;
  }

  const error = err as Error;
  throw new ErrorApp({ message: error.message, path });
};
