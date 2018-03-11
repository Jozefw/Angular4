// import a core module that makes things a component
import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// decorator function tells angular how this component works
@Component({
    selector: 'courses', // css selectors like <courses> is refenced by 'courses' <div class="pig"> is referenced as '.pig'
    template: `<h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <button [style.backgroundColor]="isActive ? 'blue':'white'" class="btn btn-primary" [class.active]="isActive">Free Clicks</button>
    `
})
export class CoursesComponent {
    title = "List of Courses";
    courses;
    getTitle(){
        return this.title;
    }
    isActive = true;
    constructor(service: CoursesService){
        // DEPENDENCY INJECTION
        // IF OUR SERVICE CHANGES (ADDED PARAMETERS) we have to change it bleow, instead add it as a dependency to the constructor,as above add as provider on app.module
        // let service = new CoursesService() ;
        this.courses = service.getCourses();

    }
}

// template: `<h2>{{ getTitle() + " Title" + title }}</h2>