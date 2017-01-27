/// <reference path='fourslash.ts'/>

//// interface interface1 extends interface1 {
////    [|{| "isWriteAccess": true, "isDefinition": true |}doStuff|](): void;   // r0
////    [|{| "isWriteAccess": true, "isDefinition": true |}propName|]: string;  // r1
//// }
////
//// var v: interface1;
//// v.[|doStuff|]();  // r2
//// v.[|propName|];   // r3

const [r0, r1, r2, r3] = test.ranges();
verify.referenceGroups([r0, r2], [{ definition: "(method) interface1.doStuff(): void", ranges: [r0, r2] }]);
verify.referenceGroups([r1, r3], [{ definition: "(property) interface1.propName: string", ranges: [r1, r3] }]);
