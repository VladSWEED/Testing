import {} from "styled-components/cssprop"; // Allow css prop
import { Theme } from "./src/components/StyleWrapper";

// extend the module declarations using custom theme type
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
