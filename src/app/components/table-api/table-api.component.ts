import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-table-api',
  templateUrl: './table-api.component.html',
  styleUrls: ['./table-api.component.css']
})
export class TableApiComponent implements OnInit {
  public datasApi: any;
  public routesNames: string[] = [];
  public isDetail: boolean = false;
  public detailRoute: any = [];
  public queryStr: any = [];
  public body: any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getDatasApi()
    .subscribe( data => {
      data['name_api'] = 'API DOC Flyops';
      this.datasApi = data;
      console.log('data Api ', data);
      this.getTitles(data);
    }, err => {
      console.log('error ', err);
    })
  }

  public getTitles(datasApi) {
    let tmp = [];
    datasApi.routes.forEach( (route) => {
      let tmpRoutes  =  route.url.split('/');
      tmp.push(tmpRoutes[1])
    })
    this.routesNames = tmp.filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
  });
  console.log('routesName ', this.routesNames)
  }

  public seeDetails(route) {
    this.isDetail = true;
    for(let  one in route.response) {
      let val = one + ' : ' + route.response[one]
      this.detailRoute.push(val)
    }
    for(let  one in route.queryString) {
      let val = one + ' : ' + route.queryString[one]
      this.queryStr.push(val)
    }
    for(let  one in route.body) {
      let val = one + ' : ' + route.body[one]
      this.body.push(val)
    }
  }

  public closeDetail() {
    this.isDetail = false;
    this.detailRoute = null;
  }

  
}
