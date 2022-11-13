import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-memers-list',
  templateUrl: './memers-list.component.html',
  styleUrls: ['./memers-list.component.css']
})
export class MemersListComponent implements OnInit {
  members: Member[];

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(){
    this.memberService.getMembers().subscribe(members=>{
      this.members = members;
      console.log(this.members);
    })
  }

}
