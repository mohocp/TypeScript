/// <reference path="fourslash.ts" />

////class X {
////    public [|constructor|]() {}
////}
////var x = new [|X|]();

const ranges = test.ranges();
const ctr = ranges[0];
verify.referenceGroups(ctr, [{ definition: "constructor X(): X", ranges }]);
