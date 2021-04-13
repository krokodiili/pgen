import * as results from "./results";
import { create } from "../core/app";

test("should generate code matching the given results", () => {
  const result = create(["Employee", "firstName", "string", true]);
  const expected = {
    joo: expect.any("string"),
  };

  console.log(expected);

  expect(result).toMatchSnapshot(expected);
});
