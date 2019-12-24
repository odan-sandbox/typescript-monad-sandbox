import { Monad } from "./monad";

export class ListMonad<T> implements Monad<T> {
  private value: T[];
  public constructor(value: T[]) {
    this.value = value;
  }

  public unit(x: T) {
    return new ListMonad([x]);
  }

  public bind<S>(f: (x: T) => ListMonad<S>): ListMonad<S> {
    const xs = this.value.map(f);
    // reduce + concat で flat
    return new ListMonad(
      xs.map(x => x["value"]).reduce((acc, val) => acc.concat(val, []))
    );
  }
}
