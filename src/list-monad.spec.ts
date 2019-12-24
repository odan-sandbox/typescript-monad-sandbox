import { ListMonad } from "./list-monad";

describe("list monad", (): void => {
  it("should be correct", (): void => {
    const xs = new ListMonad([1, 2, 3]).bind(x => new ListMonad([x * 2]));

    expect(xs["value"]).toEqual([2, 4, 6]);
  });

  it("should be correct sono 2", (): void => {
    const xs = new ListMonad([1, 2, 3]).bind(x =>
      new ListMonad([4, 5, 6]).bind(y => new ListMonad([x * y]))
    );

    expect(xs["value"]).toEqual([4, 5, 6, 8, 10, 12, 12, 15, 18]);
  });
});
