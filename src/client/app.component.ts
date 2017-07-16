import { Component,
         Directive,
         ElementRef,
         Renderer,
         ChangeDetectionStrategy,
         OnInit,
         ViewEncapsulation } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    catTitle:string;

    agreed = 0;
    disagreed = 0;
    voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

    onVoted(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
        console.log('PARENT agreed', agreed)
    }

    onCategoryTitled(cat_title: string) {
        console.log('EVENT recieved cat_title:', cat_title)
        this.catTitle = cat_title;
    }

    ngOnInit() {
        console.log('AppComponent init')
    }
}