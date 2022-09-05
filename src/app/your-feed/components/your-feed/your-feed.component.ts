import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nb-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.scss'],
})
export class YourFeedComponent implements OnInit {
  constructor() {}
  apiUrl = '/articles/feed';
  ngOnInit(): void {}
}
