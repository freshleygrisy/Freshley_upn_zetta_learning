import { Component, OnInit } from '@angular/core';
export interface item {id : number , name : string , Harga : number}
export interface Selecteditem {id : number , name : string , Harga : number, amount : number}


@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})
export class KasirComponent implements OnInit {


  public items : item[] = [
    {id : 1 , name : 'Hazelnute Choco', Harga: 25000},
    {id : 2 , name : 'Black Tea', Harga: 13000},
    {id : 3 , name : 'Lemon Squish Tea', Harga: 10000},
    {id : 4 , name : 'Red Velvet', Harga: 23000},
    {id : 5 , name : 'Dark Chocolate', Harga: 24000},
    {id : 6 , name : 'Onion Ring', Harga: 24000},
    {id : 7 , name : 'Chocolate', Harga: 18000},
    {id : 8 , name : 'Capucinno', Harga: 17000},
    {id : 9 , name : 'Chicken Wing', Harga: 35000},
    {id : 10 , name : 'Lime Mojito', Harga: 26000}
  ]

  public selectedItems : Selecteditem[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item :item){
    const duplicated =this.selectedItems.findIndex(({id})   =>id=== item.id)

    if(duplicated>=0){
      this.selectedItems[duplicated].amount +=1
    }
    else{
      this.selectedItems.push({...item, amount: 1})
    }
  }

}