export interface Monad<T> {
  // 本当はこれを書きたかった
  // value: T

  unit(): Monad<T>;

  bind<S>(f: (x: T) => Monad<S>): Monad<S>;
}

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
