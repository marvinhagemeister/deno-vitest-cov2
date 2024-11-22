import { expect, it} from "vitest"
import { add } from "./foo"

it("works", () => {
  expect(add(1,2)).toEqual(3)
})
