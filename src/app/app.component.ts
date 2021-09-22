import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    minutes = 0;
    gender = 'female';
    logo = 'https://angular.io/assets/images/logos/angular/angular.png';

    increment(i: number): void {
        this.minutes = Math.min(5, Math.max(0, this.minutes + i));
    }

    male(): void {
        this.gender = 'male';
    }

    female(): void {
        this.gender = 'female';
    }

    other(): void {
        this.gender = 'other';
    }
}
