import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private router:Router,private formbuilder:FormBuilder,private toastr: ToastrService, private api:ApiService) { }
  url="http://localhost:3000/queries";
  ngOnInit(): void {
  }
  
  formSubmited=false;
  myForm: FormGroup = this.formbuilder.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required]],
    mobile:["", [Validators.required]],
    subject:["", [Validators.required]],
    message: ["", [Validators.required]],
    
  })


  send()
  {
    if(this.myForm.status =="VALID")
    {
      let time = Date.now()
      let body=
      {
        id:time,
        name:this.myForm.value.name,
        email:this.myForm.value.email,
        mobile:this.myForm.value.mobile,
        subject:this.myForm.value.subject,
        message:this.myForm.value.message
      }

      this.api.post(this.url,body).subscribe(res=>{
        console.log(res)
        this.toastr.success('Query Created');
         this.router.navigateByUrl('/view-query');
      })

    }else{
      this.toastr.error('All Fields are Required');
    }
    
    
  }

}
