import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularcsv';

 //array varibales to store csv data
 lines: string[] = []; //ARREGLO PARA ENCABEZADOS
 linesR: string[]= []; // ARREGLO PARA REGISTROS OLINEAS
 file:any;  //DECLARAS VARIABLE FILE TIPO ANY
 
 fileChanged(e:any) {  //ESTA ES LA FUNCION
   this.file = e.target.files[0]; 

  let fileReader = new FileReader(); 
   fileReader.onload = (e) => { 
     let csv: any = fileReader.result;
   let allTextLines = []; //DECLARAS UN ARREGLO
   //allTextLines = csv.split(/\r|\n|\r/); //PARTES EL CSV Y LO PONES EN EL ARREGLO alltextlines
   allTextLines = csv.split(/\r|\n|\r/);
   
   let longitud = allTextLines.length;

   for(let i = 1; i < longitud; i++){
    console.log("la", i, "posicion es", allTextLines[i].split(';'))
   }
   

  
  
  
   //Table Headings
   let headers = allTextLines[0].split(';');
   let data = headers;
   let tarr: string[] | null | any = [];
   
   for (let j = 0; j < headers.length; j++) {
     tarr.push(data[j]);
   }
   //Pusd headings to array variable
   

   this.lines.push(tarr);
   
  
   // Table Rows
   let tarrR: string[] | null | any = [];
   let arrl = allTextLines.length;
   let rows = [];
   for(let i = 1; i < arrl; i++){
   rows.push(allTextLines[i].split(';'));
  }
   
   for (let j = 0; j < arrl; j++) {

       tarrR.push(rows[j]);
       console.log(rows[j])
       
   }
  //Push rows to array variable
   this.linesR.push(tarrR); 

   
    } 
    fileReader.readAsText(this.file);

    
  }

  
}
/*

if(file && files.length > 0) {
  console.log(file.name);
  console.log(file.size);
  console.log(file.type);
  //File reader method
  let reader: FileReader = new FileReader();
  reader.readAsText(file);
  
  reader.onload = (e) => {
   let csv: any = reader.result;
   let allTextLines = [];
   allTextLines = csv.split(/\r|\n|\r/);
  
  //Table Headings
   let headers = allTextLines[0].split(';');
   let data = headers;
   let tarr: string[] | null | any = [];
   
   for (let j = 0; j < headers.length; j++) {
     tarr.push(data[j]);
   }
   //Pusd headings to array variable
   

   this.lines.push(tarr);
   
  
   // Table Rows
   let tarrR: string[] | null | any = [];
   let arrl = allTextLines.length;
   let rows = [];
   for(let i = 1; i < arrl; i++){
   rows.push(allTextLines[i].split(';'));
  }
   
   for (let j = 0; j < arrl; j++) {

       tarrR.push(rows[j]);
       console.log(rows[j])
       
   }
  //Push rows to array variable
   this.linesR.push(tarrR);
           
}
}
}

 
}


 /*
      
     
   if(file && files.length > 0) {
        console.log(file.name);
        console.log(file.size);
        console.log(file.type);
        //File reader method
        let reader: FileReader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
         let csv: any = reader.result;
         let allTextLines = [];
         allTextLines = csv.split(/\r|\n|\r/);
        
        //Table Headings
         let headers = allTextLines[0].split(';');
         let data = headers;
         let tarr: string[] | null | any = [];
         
         for (let j = 0; j < headers.length; j++) {
           tarr.push(data[j]);
         }
         //Pusd headings to array variable
         

         this.lines.push(tarr);
         
        
         // Table Rows
         let tarrR: string[] | null | any = [];
         let arrl = allTextLines.length;
         let rows = [];
         for(let i = 1; i < arrl; i++){
         rows.push(allTextLines[i].split(';'));
        }
         
         for (let j = 0; j < arrl; j++) {
     
             tarrR.push(rows[j]);
             console.log(rows[j])
             
         }
        //Push rows to array variable
         this.linesR.push(tarrR);
                 
     }
   }
 }

 
}
*/








/*
      console.log(files);
  
             
 
         let file: File = files.item[0] as File;
     
   if(file && files.length > 0) {
        console.log(file.name);
        console.log(file.size);
        console.log(file.type);
        //File reader method
        let reader: FileReader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
         let csv: any = reader.result;
         let allTextLines = [];
         allTextLines = csv.split(/\r|\n|\r/);
        
        //Table Headings
         let headers = allTextLines[0].split(';');
         let data = headers;
         let tarr: string[] | null | any = [];
         
         for (let j = 0; j < headers.length; j++) {
           tarr.push(data[j]);
         }
         //Pusd headings to array variable
         

         this.lines.push(tarr);
         
        
         // Table Rows
         let tarrR: string[] | null | any = [];
         let arrl = allTextLines.length;
         let rows = [];
         for(let i = 1; i < arrl; i++){
         rows.push(allTextLines[i].split(';'));
        }
         
         for (let j = 0; j < arrl; j++) {
     
             tarrR.push(rows[j]);
             console.log(rows[j])
             
         }
        //Push rows to array variable
         this.linesR.push(tarrR);
                 
     }
   }
 }

 
}
*/
