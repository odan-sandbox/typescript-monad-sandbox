import { Monad } from "./monad";

export class Maybe<T> implements Monad<T> {
  private value?: T;
  private constructor(value?: T) {
    this.value = value;
  }

  public static nothing<X>(): Maybe<X> {
    return new Maybe<X>(undefined);
  }

  public static just<X>(x: X): Maybe<X> {
    return new Maybe<X>(x);
  }

  public unit(): Maybe<T> {
    if (this.value) {
      return Maybe.just<T>(this.value);
    }
    return Maybe.nothing<T>();
  }

  public bind<S>(f: (x: T) => Maybe<S>): Maybe<S> {
    if (this.value) {
      return f(this.value);
    }
    return Maybe.nothing<S>();
  }
}
