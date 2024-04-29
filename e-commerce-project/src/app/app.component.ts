import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserScreenComponent } from "./user/user-screen/user-screen.component";
import { CommonModule } from '@angular/common';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

const MATERIAL_COMPONENTS = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatTooltipModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
];


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule,
      RouterOutlet,
      UserScreenComponent,
      MdbCarouselModule,
      FontAwesomeModule,
      NgbModule,
      MatDialogModule,
      CommonModule,
      RouterLink,
      RouterLinkActive
    ],
})
export class AppComponent {
  title = 'e-commerce-project';
}
