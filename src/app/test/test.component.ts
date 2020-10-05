import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  data
  id
    constructor(public db:AngularFirestore,public route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get("id")
      console.log("Document Id",this.id)
      this.db.collection("testing").doc(this.id).valueChanges().subscribe(res=>{
        this.data = res
        console.log("all data",this.data)
      })
    }
  
}
