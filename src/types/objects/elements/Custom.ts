import { Renderers } from "../properties/Renderers";
import { Special } from "../properties/Specials";
import { Panel } from "./panel";

export interface Custom extends Panel, Renderers, Special { };