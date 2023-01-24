import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {User} from 'src/app/entities/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  id = 0;
  name = '';
  user: Array<User> = [];
  selectedUser: User | undefined;
  message = '';

  constructor (private userService: UserService, private http:HttpClient) {
  }

  ngOnInit(): void {}

  search(): void {

    this.userService.find(this.name).subscribe({
        next: (user) => {
            this.user = user;
        },
        error: (err) => {
            console.debug('Error', err);
        }
      });
  }

  select(u: User): void {
    this.selectedUser = u;
  }

  save(): void {

    if (!this.selectedUser) return;

    const url = "http://localhost:3000/users";

    const headers = new HttpHeaders()
        .set('Accept', 'application/json');

    this.http
        .post<User>(url, this.selectedUser, { headers })
        .subscribe({
            next: (user) => {
                this.selectedUser = user;
                this.message = 'Update successful!';
            },
            error: (errResponse) => {
                this.message = 'Error on updating the User';
                console.error(this.message, errResponse);

            }
        });
    }

    delete(): void {

        if (!this.selectedUser) return;

        const url = "http://localhost:3000/users";

        const headers = new HttpHeaders()
            .set('Accept', 'application/json');

        this.http
            .delete<User>(url)
            .subscribe((u) => {
                console.log(u);
            });
    }
}
