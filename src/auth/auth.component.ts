import { Component } from "@angular/core";

@Component({
    selector: 'app-auth',
    template: './auth.component.html'
    })
    export class AuthComponent {
        isLoginMode = true;

        onSwithMode() {
            this.isLoginMode = !this.isLoginMode;
        }

    }