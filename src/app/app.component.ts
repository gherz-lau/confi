import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  file:any;  //DECLARAS VARIABLE FILE TIPO ANY
 
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
                console.log("la", i, "posicion es", allTextLines[i])   //allTextLines[i].split(';')
          }

        }

          fileReader.readAsText(this.file);

  }
}
  
  