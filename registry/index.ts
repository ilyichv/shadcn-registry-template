import { blocks } from "./registry-blocks";
import { hooks } from "./registry-hooks";
import { lib } from "./registry-lib";
import { themes } from "./registry-themes";
import { ui } from "./registry-ui";
import type { Registry } from "./schema";

export const registry: Registry = [
  // eventually add your registires here
  ...blocks,
  ...hooks,
  ...lib,
  ...themes,
  ...ui,
];
