import { VariableBinding } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  file:any;  //DECLARAS VARIABLE FILE TIPO ANY
  persons = [];
  
  winArray = Array<{ reward: string; randomNumber: number; winner: string  }>;

FilePersonsLoad (e:any) {

  this.file = e.target.files[0]; 
  let fileReader = new FileReader(); 
 
  fileReader.onload = (e) => {  
          let csv: any = fileReader.result;
          let allTextLines = []; 
          allTextLines = csv.split(/\n/); //guardas el csv en el arreglo, partiendolo cada salto de linea
          let longitud = allTextLines.length - 1; 
          allTextLines.splice(longitud, 1 );
          
          this.persons =allTextLines;

          //IMPRIMIMOS EL ARRAY EN LA CONSOLA
          for(let i = 0; i < longitud; i++){
                console.log("la", i, "posicion es", this.persons[i])   
              }
             
              
          }
           
          fileReader.readAsText(this.file);
        
} //final de FilePersonsLoad



FileRewardsLoad (e:any) {

  this.file = e.target.files[0]; 
  let fileReader = new FileReader(); 
 
  fileReader.onload = (e) => {  
          let csv: any = fileReader.result;
          let allTextLines = [];
          //= Array<{ reward: string; randomNumber: number; winner: string  }>;
       
          let elObjeto = {
              reward: String,
              randomNumber: Number,
              Winner: String
          }
         
          allTextLines = csv.split(/\n/); //guardas el csv en el arreglo, partiendolo cada salto de linea
          let longitud = allTextLines.length - 1; 
          allTextLines.splice(longitud, 1 );
          
         //IMPRIMIMOS EL ARRAY EN LA CONSOLA
          for(let i = 0; i < longitud; i++){
            elObjeto.reward = allTextLines[i];
            this.winArray.push(elObjeto);
            console.log("la", i, "posicion es", allTextLines[i]);
                                              
          }

                        
          }
           
          fileReader.readAsText(this.file);
        
} //final de FileRewardsLoad













sorteo(){
   //window.alert("Se ejecutó sorteo");
   window.alert("Se ejecutó sorteo");

   }




   

        }

/*

  fileChanged(e:any) {  //ESTA ES LA FUNCION
  //CARGAMOS EL ARCHIVO 
    
  this.file = e.target.files[0]; 
  let fileReader = new FileReader(); 
    
    fileReader.onload = (e) => {  //LO DIVIDIMOS Y GUARDAMOS EN UN ARRAY LLAMADO "ALL TEXT LINES"
          let csv: any = fileReader.result;
          let allTextLines = []; //DECLARAS UN ARREGLO
          allTextLines = csv.split(/\n/); //guardas el csv en el arreglo, partiendolo cada salto de linea
                
          //eliminamos la ultima posicion del array, que es un salto de línea (vacío) 
          let longitud = allTextLines.length;
          allTextLines.splice(longitud-1, 1 );
          longitud = allTextLines.length;

          //IMPRIMIMOS EL ARRAY EN LA CONSOLA
          for(let i = 0; i < longitud; i++){
                console.log("la", i, "posicion es", allTextLines[i])   
              }

              if (this.archivo1[0]== 0){

                this.archivo1 =allTextLines;

              } 
              else {
                this.archivo2 =allTextLines;
              }

              return allTextLines; 
        }
 
        fileReader.readAsText(this.file);
    

  }

*/


