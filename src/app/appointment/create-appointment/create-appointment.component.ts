import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/server/appointment';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent implements OnInit {

  constructor(private router:Router,private formbuilder:FormBuilder,private toastr: ToastrService, private api:ApiService) { }
  url ="http://localhost:3000/appointments";
  formSubmited=false;
  added=false;
  amount=500;
  myForm: FormGroup = this.formbuilder.group({
    name: ["", [Validators.required]],
    age: ["", [Validators.required]],
    email: ["", [Validators.required]],
    mobile:["", [Validators.required]],
    address1:["", [Validators.required]],
    address2: ["", [Validators.required]],
    city:["", [Validators.required]],
    state:["", [Validators.required]],
    country:["", [Validators.required]],
    pincode:["", [Validators.required]],
    trainer:["", [Validators.required]],
    physio:["", [Validators.required]],
    package:["package1", [Validators.required]],
    weeks:["1", [Validators.required]],
    amount:[this.amount],
  })

  ngOnInit(): void {
    this.myForm.controls['amount'].disable();
    
  }

  bookAppointment()
  {
    console.log(this.myForm)
    if(this.myForm.status == "VALID")
    {
      let time = Date.now();
      let body ={
        id:time,
        name:this.myForm.value.name,
        age:this.myForm.value.age,
        email:this.myForm.value.email,
        mobile:this.myForm.value.mobile,
        address1:this.myForm.value.address1,
        address2:this.myForm.value.address2,
        city:this.myForm.value.city,
        state:this.myForm.value.state,
        country:this.myForm.value.country,
        pincode:this.myForm.value.pincode,
        trainer:this.myForm.value.trainer,
        physio:this.myForm.value.physio,
        package:this.myForm.value.package,
        weeks:this.myForm.value.weeks,
        amount:this.amount
      }
      
      this.api.post(this.url,body).subscribe(res=>{
        console.log(res)
        this.toastr.success('Appointment Saved');
        this.router.navigateByUrl('/view-appointment');
      })
      

      
    }else{
      this.toastr.error('All Fields are Required');
      
    }
    




 

      
    
  }

  add()
  {
    console.log("add caleed")
    this.amount = this.amount+200;
    this.added = true;
  }

  sub()
  {
    if(this.added)
    {
      this.amount=this.amount-200;
      this.added=false;
    }
  }

  pack()
  {
    let p1 = this.myForm.value.physio == 'yes'?200:0;
    let w1 = this.myForm.value.weeks;
    if(this.myForm.value.package == 'package2')
    {
      this.amount = p1+ w1*4*400;
    }
    if(this.myForm.value.package == 'package3')
    {
      this.amount = p1+ w1*5*300;
    }
    if(this.myForm.value.package =='package1')
    {
      this.amount = p1+500;
    }
    
  }

  

}
