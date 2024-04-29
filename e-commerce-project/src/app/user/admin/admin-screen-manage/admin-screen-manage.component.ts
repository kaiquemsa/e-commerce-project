import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GadgetsInterface } from '../../../shared/interface/gadgets.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from '../../../shared/services/http-request.service';
import { ToastrService } from 'ngx-toastr';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatRadioModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatMenuModule,
  MatTooltipModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatCheckboxModule,
];

@Component({
  selector: 'app-admin-screen-manage',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MATERIAL_MODULES, CommonModule,RouterLink,RouterLinkActive, HttpClientModule],
  templateUrl: './admin-screen-manage.component.html',
  styleUrl: './admin-screen-manage.component.scss'
})
export class AdminScreenManageComponent {
  formGroup!: FormGroup;
  gadget: GadgetsInterface[] = [];
  gadgetsData: GadgetsInterface[] = [];
  constructor(
    private _formBuilder: FormBuilder,
    private httpRequest: HttpRequestService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.buildFormGroup();
  }

  ngOnInit () {

    const id = this.route.snapshot.paramMap.get('id');


    this.httpRequest.getGadgets().subscribe((data: GadgetsInterface[]) => {
      const gadget = data.find((gadget:any) => gadget.id === id);

      if (gadget) {
        this.formGroup.patchValue(gadget);

        this.formGroup.get('name')?.setValue(gadget.name);
        this.formGroup.get('price')?.setValue(gadget.price);
        this.formGroup.get('quantity')?.setValue(gadget.quantity);
        this.formGroup.get('availability')?.setValue(gadget.availability);
        this.formGroup.get('img')?.setValue(gadget.img);
      } else {
        console.log(`Gadget com id ${id} não encontrado.`);
      }
    });

  }

  private buildFormGroup(gadgets?: GadgetsInterface): void {
    this.formGroup = this._formBuilder.group({
      id: [
        gadgets?.id ? gadgets.id : '',
        gadgets?.id ? Validators.required : '',
      ],
      name: [
        gadgets?.name ? gadgets.name : '',
        Validators.required,
      ],
      price: [
        gadgets?.price ? gadgets.price : '',
        [Validators.maxLength(4), Validators.required],
      ],
      quantity: [
        gadgets?.quantity ? gadgets.quantity : '',
        Validators.required,
      ],
      availability: [
        gadgets?.availability ? gadgets.availability : false,
        Validators.required,
      ],
      img: [
        gadgets?.img ? gadgets.img : '',
        Validators.required,
      ],
    },
    );
  }



  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id === undefined || id === null) {
      if (this.formGroup.valid) {
        this.httpRequest.postGadgets(this.formGroup.value).subscribe(response => {
          this.toastr.success('Create item success!', 'Success', {
            closeButton: true
          });
          this.router.navigate(['/admin-screen']);
        }, error => {
          this.toastr.error('Error creating item!');
        });
      }
    }
    else {
      this.httpRequest.updateGadgets(this.formGroup.value).subscribe(response => {
        this.toastr.success('Update item success!', 'Success', {
          closeButton: true
        });
        this.router.navigate(['/admin-screen']);
      }, error => {
        this.toastr.error('error updating item!');
      });
    }
  }

}
