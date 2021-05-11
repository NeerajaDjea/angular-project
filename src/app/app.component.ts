import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  providers: [ UserServiceService ]
})
export class AppComponent {
  loadedFeature = 'recipe';


  onNavigate(feature) {
    this.loadedFeature = feature;

  }

}
