import { OpportunityStageEnum } from "./opportunityStageEnum";

export interface Opportunity{
    name:string,
    stage:OpportunityStageEnum,
    closeDate:Date

}
