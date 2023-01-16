import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { USERS } from '../mock-users';
import { User } from '../user';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  users = USERS;
  selectedUser: User;
  edit = false;
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openNewModal() {
    this.edit = false;
    this.modalRef = this.modalService.open(ModalComponent, { 
      data: {edit: this.edit}
    })
  }

  openEditModal(user: User) {
    this.edit = true;
    this.modalRef = this.modalService.open(ModalComponent, {
      data: {edit: this.edit, userSelected: user}
    })
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.1/i18n/es-ES.json'
      }
    };
  }
    
}
