import { Component, OnInit } from '@angular/core';
import { WarningService } from '../warning.service';

@Component({
  selector: 'app-artist-track',
  templateUrl: './artist-track.component.html',
  styleUrls: ['./artist-track.component.css']
})
export class ArtistTrackComponent implements OnInit {
  private trackData;
  private resultData;
  private track;
  constructor(private _service:WarningService) { }

  ngOnInit() {
    this._service.tracklist().subscribe(res=>{
      this.track = res;
      this.trackData = this.track.resultData
    })
  }

}
