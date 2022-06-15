import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularcsv';

 //array varibales to store csv data
 lines: string[] = []; //for headings
 linesR: string[]= []; // for rows
 
 
 
 //File upload function
  changeListener(files: FileList){
      console.log(files);
  
              
 
         let file: File = files.item(0) as File;
     
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


