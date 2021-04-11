import * as results from "../core/results";
import { create } from "../core/app";

test("should sum two numbers", () => {
  const result = create(["Employee", "firstName", "string", true]);
  const expected = {
    joo: expect.any("string")
  };

  console.log(expected);

  expect(result).toMatchSnapshot(expected);
});
