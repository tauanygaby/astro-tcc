import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plano-de-pesquisa',
  templateUrl: './plano-de-pesquisa.component.html',
  styleUrls: ['./plano-de-pesquisa.component.css']
})
export class PlanoDePesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

      //img
      url="././assets/img/imagemDeCapa.png";
      inputFileChange(event){
        if (event.target.files){
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
          reader.onload=(event:any)=>{
            this.url=event.target.result;
              }
            }
          }

}
