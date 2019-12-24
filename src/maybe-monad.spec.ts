import { Maybe } from "./maybe-monad";

describe("maybe monad", (): void => {
  it("should be correct", (): void => {
    const x = Maybe.just(10).bind(x => Maybe.just(x + 32));

    expect(x["value"]).toBe(42);
  });
});
