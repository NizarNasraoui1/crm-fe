import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    products:any[]=[{category: "Accessories",
    code: "f230fh0g3",
    description: "Product Description",
    id: "1000",
    image: "bamboo-watch.jpg",
    inventoryStatus: "INSTOCK",
    name: "Bamboo Watch",
    price: 65,
    quantity: 24,
    rating: 5}];
  constructor() { }

  ngOnInit(): void {
  }

}
