import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;
  isImgLoaded: boolean = false;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileService.onSelectedProfileChanged.subscribe((response) => {
      this.isImgLoaded = false;
      this.profile = response;
    });
  }
}
