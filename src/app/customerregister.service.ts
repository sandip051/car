import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})



export class CustomerregisterService {
  cities: [] = [];
  public tokenData = JSON.parse(localStorage.getItem("token"));
  public headers = new HttpHeaders({
    "Authorization": `${this.tokenData.token}`
    });
  public options = { headers: this.headers };

  constructor(private httpclient:HttpClient) { }

 
  customerRegister(data)
  {
    this.httpclient.post("http://localhost:4000/users/car/customer/register",data).
    subscribe((data)=>console.log(data));
  }

  customerLogin(data)
  {
 return this.httpclient.post("http://localhost:4000/users/car/login/customer",data);

  }

  supervisorRegister(data)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*' 
      });
  const options = { headers: headers };
      
    this.httpclient.post("http://localhost:4000/users/car/superviser/register",data,options).
    subscribe((data)=>console.log(data));

  }
  
  adminRegister(data)
  {
    this.httpclient.post("http://localhost:4000/users/car/customer/register",data).
    subscribe((data)=>console.log(data));
  }
  
  getData()
  {
   return this.httpclient.get("http://localhost:4000/users/car/admin/getdata",this.options)
  }
  deleteEmp(id)
  {
    this.httpclient.post("http://localhost:4000/users/car/admin/superviserdel",{supid:id},this.options).
    subscribe((data)=>{
    console.log(data);
    });
  }
  getDatabyid(id)
  {
    return this.httpclient.get("http://localhost:4000/users/car/admin/getdata/"+id,this.options);
    }
    updateEmp(data)
    {
      this.httpclient.post("http://localhost:4000/users/car/admin/superviserup",data,this.options).
      subscribe((data)=>{
      console.log(data);
      });
    }

    // custreq
     
    getDatareq()
  {
   return this.httpclient.get("http://localhost:4000/users/car/admin/getdatareq",this.options)
  }
  // end

  getDatarequest(id)
  {
   return this.httpclient.get("http://localhost:4000/users/car/admin/getreqdetails/"+id,this.options)
  }

  getAvalEmp()
  {
    return this.httpclient.get("http://localhost:4000/users/car/admin/avalEmp",this.options);  
  }

  getapoi()
  {
    return this.httpclient.get("http://localhost:4000/users/car/admin/getappoi",this.options); 
  }

  customerRegisterform(data)
  {
    this.httpclient.post("http://localhost:4000/users/car/customer/reguest",data).
    subscribe((data)=>console.log(data));
  }
  
  customerServiceRequest(data)
  {
    this.httpclient.post("http://localhost:4000/users/car/customer/service/reguest",data,this.options
    ).
    subscribe((data)=>console.log(data));
  }

}

 