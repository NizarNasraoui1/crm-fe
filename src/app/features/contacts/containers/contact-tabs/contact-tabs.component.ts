import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-tabs',
  templateUrl: './contact-tabs.component.html',
  styleUrls: ['./contact-tabs.component.scss']
})
export class ContactTabsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
        console.log(params.get('id'));
    })
  }

}
