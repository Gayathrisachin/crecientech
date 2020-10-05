import { Component, OnInit,ChangeDetectorRef, Input} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import { User } from '../Models/user.model';
import { UserService } from '../Service/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  isExpanded = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
   
 
    @Input() user: User;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private breakpointObserver: BreakpointObserver,private route:Router,private svc:UserService) {
  
  }
  ngOnInit() {
  
 

  }

}


