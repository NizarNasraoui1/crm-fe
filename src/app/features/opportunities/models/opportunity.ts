import { Contact } from "../../contacts/models/contact";
import { OpportunityStageEnum } from "./opportunityStageEnum";

export interface Opportunity{
    name?:string,
    stage?:OpportunityStageEnum,
    contacts?:Contact[];
    closeDate?:Date

}
