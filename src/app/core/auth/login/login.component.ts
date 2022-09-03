import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/_services/auth.service';
import { TokenStorageService } from 'src/app/core/_services/token-storage.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .p-password input {
            width: 100%;
            padding:1rem;
        }

        :host ::ng-deep .pi-eye{
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }

        :host ::ng-deep .pi-eye-slash{
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit{

    form: any = {};
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
    username!:string;
    password!:string;

    constructor(public layoutService: LayoutService,private authService:AuthService,private tokenStorage:TokenStorageService) {
        this.authService.login().subscribe((res)=>{
            console.log(res);
            this.tokenStorage.saveToken(res.access_token)
        })
    }
    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
          }
    }

    onSubmit(): void {
        this.authService.login(this.form).subscribe(
          data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);

            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.reloadPage();
          },
          err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          }
        );
      }

      reloadPage(): void {
        window.location.reload();
      }
}
