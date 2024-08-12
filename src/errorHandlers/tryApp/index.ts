import { catchErrorCreator } from "./catchErrorCreator";

export const tryApp = <
  F extends (...params: any[]) => any,
  P extends Parameters<F>
>(
  path: string,
  foo: F
): F => {
  const AsyncFunction = (async () => {}).constructor;
  const isAsync = foo instanceof AsyncFunction;
  const catchError = catchErrorCreator(path);
  let res;

  if (isAsync) {
    res = async (...params: P) => {
      try {
        return await foo(...params);
      } catch (err) {
        catchError(err);
      }
    };
  } else {
    res = (...params: P) => {
      try {
        return foo(...params);
      } catch (err) {
        catchError(err);
      }
    };
  }

  return res as F;
};
