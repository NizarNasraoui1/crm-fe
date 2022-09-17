import { Note } from "src/app/shared/models/Note";

export interface Contact{
    id:number;
    firstName:string;
    lastName:string;
    address:string;
    email:string;
    noteList:Note[]
}
