import { Component, VERSION, OnInit } from '@angular/core';
import { AnalysisFailure } from '@angular/core/schematics/migrations/missing-injectable/transform';

export class Filter {
  programid: number;
  programname: string
  formfactorid: number;
  formfactorname: string;
  capacityid: number;
  capacityname: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  
  data: Filter[] = [ {
    programid: 1,
    programname: 'Aspen Plus QS1',
    formfactorid: 1,
    formfactorname: 'U.2',
    capacityid: 2,
    capacityname: "960GB"
  },,
  {
    programid: 1,
    programname: 'Aspen Plus QS1',
    formfactorid: 1,
    formfactorname: 'U.2',
    capacityid: 1,
    capacityname: "1920GB"
  },
  {
    programid: 1,
    programname: 'Aspen Plus QS1',
    formfactorid: 1,
    formfactorname: 'U.2',
    capacityid: 3,
    capacityname: "3860GB"
  },
  {
    programid: 1,
    programname: 'Aspen Plus QS2',
    formfactorid: 1,
    formfactorname: 'M.2',
    capacityid: 1,
    capacityname: "960GB"
  },
  {
    programid: 1,
    programname: 'Aspen Plus QS2',
    formfactorid: 1,
    formfactorname: 'M.2',
    capacityid: 4,
    capacityname: "7980GB"
  },
  {
    programid: 1,
    programname: 'Malibu',
    formfactorid: 1,
    formfactorname: 'E1.L',
    capacityid: 1,
    capacityname: "960GB"
  }]

  ngOnInit () {
      this.converToFilterObject();
      X: {
        Y: [ 'Z', 'C']
      }
  }

  public converToFilterObject() {
    let filterobject: any = {}; 
    let dataobj: Filter;
    // console.log(this.data);
    filterobject = this.data.reduce((prev, curr) => {
      // console.log(curr);
      if (prev === {})
        return {
          [curr.programname]: {
            [curr.formfactorname]: [ curr.capacityname ]
          }
        };
      // return prev;
      return {
        ...prev,
        [curr.programname]: {
          ...prev[curr.programname],
          [curr.formfactorname]: [
            ...(prev[curr.programname] && prev[curr.programname][curr.formfactorname] ? prev[curr.programname][curr.formfactorname] : []),
            curr.capacityname
          ]
        }
      }
    }, {})
    console.log(filterobject);
  }
}
