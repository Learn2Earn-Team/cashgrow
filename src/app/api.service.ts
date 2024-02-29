import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  public getdata(): Observable<any> {
    let packaged: any =
      [{
       PackageName:'Basic',levelAmount:[{level:'Level1',Package:15,bouns:"Direct"},{level:'Level2',Package:15,bouns:"Bouns"},{level:'Level3',Package:15,bouns:"Bouns"},{level:'Level4',Package:15,bouns:"Bouns"},{level:'Level5',Package:15,bouns:"Bouns"},{level:'Level6',Package:15,bouns:"Bouns"},{level:'Level7',Package:15,bouns:"Bouns"}], mainAmount:50,Package2:25,
      },{
        PackageName:'Prime',levelAmount:[{level:'Level1',Package:15,bouns:"Direct"},{level:'Level2',Package:15,bouns:"Bouns"},{level:'Level3',Package:15,bouns:"Bouns"},{level:'Level4',Package:15,bouns:"Bouns"},{level:'Level5',Package:15,bouns:"Bouns"},{level:'Level6',Package:15,bouns:"Bouns"},{level:'Level7',Package:15,bouns:"Bouns"}], mainAmount:40
      }
      ,{
        PackageName:'PrimePlus',levelAmount:[{level:'Level1',Package:15,bouns:"Direct"},{level:'Level2',Package:15,bouns:"Bouns"},{level:'Level3',Package:15,bouns:"Bouns"},{level:'Level4',Package:15,bouns:"Bouns"},{level:'Level5',Package:15,bouns:"Bouns"},{level:'Level6',Package:15,bouns:"Bouns"},{level:'Level7',Package:15,bouns:"Bouns"}], mainAmount:30
      },{
        PackageName:'Premium',levelAmount:[{level:'Level1',Package:15,bouns:"Direct"},{level:'Level2',Package:15,bouns:"Bouns"},{level:'Level3',Package:15,bouns:"Bouns"},{level:'Level4',Package:15,bouns:"Bouns"},{level:'Level5',Package:15,bouns:"Bouns"},{level:'Level6',Package:15,bouns:"Bouns"},{level:'Level7',Package:15,bouns:"Bouns"}], mainAmount:20
      },{
        PackageName:'Premium Plus',levelAmount:[{level:'Level1',Package:15,bouns:"Direct"},{level:'Level2',Package:15,bouns:"Bouns"},{level:'Level3',Package:15,bouns:"Bouns"},{level:'Level4',Package:15,bouns:"Bouns"},{level:'Level5',Package:15,bouns:"Bouns"},{level:'Level6',Package:15,bouns:"Bouns"},{level:'Level7',Package:15,bouns:"Bouns"}], mainAmount:10
      }
      ];
    return of(packaged);
  }
    
}
