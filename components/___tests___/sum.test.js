import { Sum } from "../Sum";

test( "Should return sum of a and b", () => {
  const result = Sum(4, 7);

  //assertion

  expect(result).toBe(11);
} )

//industry standard is test coverage of 50%

//100% is not realistic for large scale apps