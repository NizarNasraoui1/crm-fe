export class PageRequestParams{
    page!:number;
    pageSize!:number;
    sortDirection!:string;
    sortField!:string;
    searchWord!:string;

    constructor(page:number,pageSize:number,sortDirection?:string,sortField?:string,searchWord:string=""){
        this.page=page;
        this.pageSize=pageSize;
        this.searchWord=searchWord;
        if(sortDirection && sortField){
            this.sortDirection=sortDirection;
            this.sortField=sortField;
        }
    }
}
