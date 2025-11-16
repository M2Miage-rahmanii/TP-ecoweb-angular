import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

export function tapResponse<T>(
  nextFn?:
    | ((value: T) => void)
    | {
        next?: (value: T) => void;
        error?: (error: any) => void;
        finalize?: () => void;
      },
  errorFn?: ((error: any) => void) | null,
  finalizeFn?: () => void
) {
  return (source: Observable<T>) => {
    if (typeof nextFn === 'function') {
      // Overload 1: (next, error, finalize?) => Operator
      return source.pipe(
        tap(nextFn),
        catchError((error) => {
          if (errorFn) {
            errorFn(error);
          }
          return throwError(() => error);
        }),
        finalize(() => {
          if (finalizeFn) {
            finalizeFn();
          }
        })
      );
    } else if (nextFn && typeof nextFn === 'object') {
      // Overload 2: ({ next, error, finalize }) => Operator
      return source.pipe(
        tap((value) => nextFn?.next?.(value)),
        catchError((error) => {
          nextFn?.error?.(error);
          return throwError(() => error);
        }),
        finalize(() => nextFn?.finalize?.())
      );
    }
    return source;
  };
}
