import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-api',
  templateUrl: './table-api.component.html',
  styleUrls: ['./table-api.component.css']
})
export class TableApiComponent implements OnInit {
  public datasApi: any;
  public routesNames: string[] = [];

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.httpService.getDatasApi()
    .subscribe( data => {
      data['name_api'] = 'API DOC Flyops';
      this.datasApi = data;
      this.getTitles(data);
    }, err => {
      console.log('error ', err);
    });
  }

  public getTitles(datasApi: any) {
    const tmp = [];
    datasApi.routes.forEach( (route: any) => {
      const tmpRoutes  =  route.url.split('/');
      tmp.push(tmpRoutes[1]);
    });
    this.routesNames = tmp.filter(function(item, pos, self) {
      return self.indexOf(item) === pos;
  });
  }

  public seeDetails(route: any) {
    this.router.navigate(['edit-route' ], { queryParams: { datasRoute: JSON.stringify(route) }});
  }

  public isEven(nameApi: any) {
    const name = nameApi.url.split('/')[1];
    return this.routesNames.indexOf(name) % 2 === 0;
  }
}
