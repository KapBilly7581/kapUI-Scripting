import { Obj } from "./Object";
import { JsonBuilder } from "../generator/JsonBuilder";
import { ReadValue } from "./ReadProperties";

Obj.forEach(require(`${process.cwd()}/kapbilly.global_variables.cjs`).global_variables, (key, value) =>
    JsonBuilder.registerGlobalVariable(key, ReadValue(value))
);

export { };
