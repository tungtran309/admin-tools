import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DroneComponent } from './drone.component';
import { DronesRoutingModule } from './drone-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBaseService } from '../datastore/database.service';
import { DroneAddDialog } from './drone-add/droneAdd.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationDialog } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DroneDetailComponent } from './drone-detail/droneDetail.component';
import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    DronesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule,
    ChartsModule,
    MatCardModule
  ],
  declarations: [DroneComponent, DroneAddDialog, DroneDetailComponent],
  providers : [DataBaseService]
})
export class DroneModule {}
