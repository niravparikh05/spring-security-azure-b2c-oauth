import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-msclient-callback',
  templateUrl: './msclient-callback.component.html',
  styleUrls: ['./msclient-callback.component.css']
})
export class MsclientCallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private securityService: SecurityService) 
  {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(p => {
      this.securityService.fetchToken(p.code, p.state).subscribe(data => {
        this.securityService.updateToken(data.accessToken);
        this.router.navigate(['/dashboard']);
      })
    })
  }

}
