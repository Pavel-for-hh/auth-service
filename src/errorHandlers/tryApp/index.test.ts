import { tryApp } from ".";
import { ErrorApp } from "../errorApp";

const tryAppValueSync = tryApp("tryAppValueSync", (v: number) => v);
const tryAppValueAsync = tryApp("tryAppValueAsync", async (v: number) => v);
const tryAppErrorSync = tryApp("tryAppErrorSync", () => {
  throw new Error("tryAppErrorSync");
});
const tryAppErrorAsync = tryApp("tryAppErrorAsync", async () => {
  throw new Error("tryAppErrorAsync");
});

describe("tryApp module", () => {
  test("tryAppValueSync", () => {
    expect(tryAppValueSync(3)).toBe(3);
  });
  test("tryAppValueAsync", () => {
    expect(tryAppValueAsync(3)).resolves.toBe(3);
  });
  test("tryAppErrorSync", () => {
    expect(tryAppErrorSync).toThrow(ErrorApp);
  });
  test("tryAppErrorAsync", () => {
    expect(tryAppErrorAsync).rejects.toThrow(ErrorApp);
  });
});
