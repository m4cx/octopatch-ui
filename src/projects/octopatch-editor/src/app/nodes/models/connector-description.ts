import { KeyDescription } from "./key-description";
import { ContentType } from "./content-type";

export interface ConnectorDescription extends KeyDescription {
  contentType: ContentType;
}
