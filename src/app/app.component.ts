import {Component, ViewContainerRef} from '@angular/core';
import {ToasterService} from '@coveuse/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {


    public constructor(private toaster: ToasterService, vcr: ViewContainerRef) {
        this.toaster.setRootViewContainerRef(vcr);
    }

}
