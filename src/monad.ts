export interface Monad<T> {
  // 本当はこれを書きたかった
  // value: T

  unit(): Monad<T>;

  bind<S>(f: (x: T) => Monad<S>): Monad<S>;
}
