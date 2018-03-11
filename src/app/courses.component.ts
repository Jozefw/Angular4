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
    <button [style.backgroundColor]="isActive ? 'blue':'white'" class="btn btn-primary" [class.active]="isActive">Free Clicks</button><button class="btn btn-warning" (click)="onClickey($event)">Clickety</button><br><input [(ngModel)]='email' (keyup.enter)="goGetem()"/><br/><h5>{{course.title | uppercase}}</h5><br/><h5>{{course.rating | number:'2.2-2'}}</h5><br/><h5>{{course.students | number}}</h5><br/><h5>{{course.price | currency:'AUD':true:'1.2-2'}}</h5><br/><h5>{{course.releaseDate | date:'shortDate'}}<h5 class="text">{{ text | summary:'25' }}</h5>
    `
})
export class CoursesComponent {
    title = "List of Courses";
    courses;
    email = "go@get.com";
    course = {
        title: "Monte Christo",
        rating: 2.948578,
        students: 256800,
        price: 1.25,
        releaseDate: new Date(2016,3,1)
    };
    text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut enim perferendis magni necessitatibus facere ipsum veritatis a accusantium. Exercitationem soluta sint minima dolor esse corrupti consequatur laudantium perspiciatis, laboriosam sit.`;
    getTitle(){
        return this.title;
    };
    onKeyUp(){
            console.log("enter pressed");
    }
    // onKeyUp($event){
    //         if($event.keyCode === 13){
    //             console.log("enter pressed");
    //         }
    //     }
    keyTouched(email){
        console.log(email);
    };
    goGetem(){
        console.log(this.email);
    }
    onClickey($event){
        $event.stopPropigation();
        alert($event);
    };
    isActive = true;
    constructor(service: CoursesService){
        // DEPENDENCY INJECTION
        // IF OUR SERVICE CHANGES (ADDED PARAMETERS) we have to change it bleow, instead add it as a dependency to the constructor,as above add as provider on app.module
        // let service = new CoursesService() ;
        this.courses = service.getCourses();

    }
}

// template: `<h2>{{ getTitle() + " Title" + title }}</h2>