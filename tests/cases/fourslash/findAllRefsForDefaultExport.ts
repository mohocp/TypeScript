/// <reference path="fourslash.ts" />

// @Filename: a.ts
////export default function /*def*/[|{| "isDefinition": true |}f|]() {}

// @Filename: b.ts
////import [|{| "isWriteAccess": true, "isDefinition": true |}g|] from "./a";
/////*ref*/[|g|]();

verify.singleReferenceGroup("function f(): void");
verify.goToDefinition("ref", "def");
