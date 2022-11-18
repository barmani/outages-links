import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-page',
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.scss']
})
export class LinksPageComponent implements OnInit {

  linkItems = [
    { label: 'Spotify', url: 'https://open.spotify.com/artist/4CeVFDazvfBQXyDQSkBSIw?si=WVYM2SNeQHik0idJ57fr4Q', imagePath: 'assets/images/spotify_logo.svg'},
    { label: 'Instagram', url: 'https://www.instagram.com/outagesband/', imagePath: 'assets/images/instagram_logo.svg'},
    { label: 'Apple Music', url: 'https://music.apple.com/us/artist/outages/1586471416', imagePath: 'assets/images/apple_music_logo.webp'},
    { label: 'Bandcamp', url: 'https://outages.bandcamp.com/', imagePath: 'assets/images/bandcamp_logo.svg'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
