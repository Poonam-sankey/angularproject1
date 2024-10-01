import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  contactForm: FormGroup;
  contactData: any = {
    name: '',
    email: '',
    contactNumber: '',
    fleetSize: ''
  };
  submitted = false;
 
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      fleetSize: ['', Validators.required],
    });
  }
 
  onSubmit() {
    if (this.contactForm.valid) {
      this.submitted = true;
      this.contactData = this.contactForm.value;
    }
  }
}