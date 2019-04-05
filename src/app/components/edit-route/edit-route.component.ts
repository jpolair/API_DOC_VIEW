import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-edit-route',
  templateUrl: './edit-route.component.html',
  styleUrls: ['./edit-route.component.css']
})
export class EditRouteComponent implements OnInit {
  datasRoute: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( data => {
      this.datasRoute = JSON.parse(data.datasRoute);
    });
  }

  public goBack() {
    this.router.navigate(['']);
  }

  public addComment() { // TODO create an access to PUT and change comment 
    this.datasRoute['comment'] = 'un super commentaire';
    this.http.addComment(this.datasRoute).subscribe( data => {
      console.log('data ', data);
    }, err => {
      console.log('err ', err);
    });
    console.log('new dataRoutes ', this.datasRoute);
  }

}
