import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubredditModel } from 'src/app/subreddit/subreddit.response';
import { SubredditService } from 'src/app/subreddit/subreddit.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  subreddits: Array<SubredditModel> = [];
  displayViewAll!: boolean;


  constructor(private router: Router,
              private subredditService: SubredditService) {
            this.subredditService.getAllSubreddits().subscribe(data => {
       if (data.length > 3) {
     this.subreddits = data.splice(0, 3);
    this.displayViewAll = true;
  } else {
  this.subreddits = data;
    }
   });
  }
 
  ngOnInit(): void {
  }

  goToCreatePost(){
    this.router.navigateByUrl('/create-post');
  }

  goToCreateSubreddit(){
    this.router.navigateByUrl('/create-subreddit');
  }

}
