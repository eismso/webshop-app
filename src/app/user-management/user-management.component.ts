import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {User} from 'src/app/entities/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  name = '';
  user: Array<User> = [];
  selectedUser: User | undefined;

  constructor (private http: HttpClient) {
  }

  createDemoUser(): void {
    const url = "http://localhost:3000/user";

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const newUser: User = {
        userId: 0,
        name: 'Maxi Muster',
        address: 'Lindengasse 12',
        email: 'maxi.muster@gmail.com'
    };

    this.http.post<User>(url, newUser, { headers }).subscribe({
        next: (user) => {
            console.debug('Neue Id: ', user.userId);
        },
        error: (err) => {
            console.error('Error', err);
        }
    });
  }

  ngOnInit(): void {}

  search(): void {

    const url = "http://localhost:3000/user";

    const headers = new HttpHeaders()
    .set('Accept','application/json');

    const params = new HttpParams()
        .set('name', this.name)

    this.http
        .get<User[]>(url, {headers, params})
        .subscribe({
            next: (users: User[]) => {
                this.user = users;
            },
            error: (errResp: any) => {
                console.error('Error loading users', errResp);
            }
        });
  }

  select(u: User): void {
    this.selectedUser = u;
  }

}
