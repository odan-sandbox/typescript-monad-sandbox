import { Monad } from "./monad";

export class IOMonad<T> implements Monad<T> {
  private value: T;
  public constructor(value: T) {
    this.value = value;
  }

  public unit(): IOMonad<T> {
    // これいる？
    return new IOMonad<T>(this.value);
  }

  public bind<S>(f: (x: T) => IOMonad<S>): IOMonad<S> {
    // これいる？
    return f(this.value);
  }
}

function getLine(): IOMonad<string> {
  return new IOMonad("hello");
}

function putStr(x: string): IOMonad<string> {
  console.log(x);
  return new IOMonad("");
}

getLine().bind(putStr);
