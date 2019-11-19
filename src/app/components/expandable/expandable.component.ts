import { Component, OnInit, EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements OnInit {

  constructor() { }
  
  @Input()
  name: string;
  
  @Input()
  description: string;


  @Output()
  change:EventEmitter<string> = new EventEmitter<string>();

  public isMenuOpen: boolean = false;

  ngOnInit() {}

  public toggleAccordion(): void{
    console.log('toggled')
    this.isMenuOpen = !this.isMenuOpen;
  }


}
