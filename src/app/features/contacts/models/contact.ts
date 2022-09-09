export class Contact{
    id:number;
    firstName:string;
    lastName:string;
    address:string;
    email:string;
    constructor(id:number,firstName:string,lastName:string,address:string,email:string){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.email=email;
    }
}
