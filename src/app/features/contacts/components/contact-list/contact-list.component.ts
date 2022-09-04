import { HttpClient } from '@angular/common/http';
import { ContactServiceService } from './../../service/contact-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    products:any[]=[
        {
            category: "Accessories",
            code: "f230fh0g3",
            description: "Product Description",
            id: "1000",
            image: "bamboo-watch.jpg",
            inventoryStatus: "INSTOCK",
            name: "Bamboo Watch",
            price: 65,
            quantity: 24,
            rating: 5}
    ];
  constructor(private contactService:ContactServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    // this.http.post("/api/contact/filter",{
    //     "searchFields":["firstName"]
    // }).subscribe((res)=>{
    //     console.log(res)
    // });
    this.http.get("/api/contact/all").subscribe((data)=>{
        console.log("here")
        console.log(data);
    })
  }
  toto($event:any){
    console.log($event)
  }

}
/*
{
  "page": 1,
  "first": 10,
  "rows": 10,
  "pageCount": 12
}
*/
