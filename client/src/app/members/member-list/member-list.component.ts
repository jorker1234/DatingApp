import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MemberListComponent implements OnInit {
  member$: Observable<Member[]>;

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.member$ = this.memberService.getMembers();
  }

}
