import { ActivatedRoute } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-not-found',
    template: `
      <h2>
        404 - Page not found
      </h2>
      <p>You might want to go to the <a href='dashboard'> dashboard page</a></p>
    `
})

export class NotFoundComponent implements OnInit {

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
    }
}