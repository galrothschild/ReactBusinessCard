import {
  createCardData,
  createCardNormalizedData,
} from "../../cards/models/CreateCardModels";
import { loginData, signupData } from "../../users/models/models";

export type formDataType =
  | signupData
  | loginData
  | createCardData
  | createCardNormalizedData;
