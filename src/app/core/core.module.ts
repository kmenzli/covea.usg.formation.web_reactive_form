import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
    HttpErrorNotifierModule,
    HttpErrorNotifierService,
    LoadingSpinnerModule,
    LogCentralModule,
    LogCentralService,
    SecurityModule,
    SecurityService,
    SESSIONID_STORAGE,
    SessionStorageService,
    StorageModule,
    ToasterModule,
    ToasterNotifierService,
    UuidInterceptorModule
} from '@coveuse/core';

import {environment} from '@env/environment';

@NgModule({
    imports: [
        HttpClientModule,
        UuidInterceptorModule,
        LogCentralModule,
        SecurityModule.forRoot(),
        StorageModule,
        HttpErrorNotifierModule,
        LoadingSpinnerModule,
        ToasterModule,
    ],
    providers: [
        {
            provide: SESSIONID_STORAGE,
            useExisting: SessionStorageService
        }
    ]
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModules: CoreModule,
        securityService: SecurityService,
        logCentralService: LogCentralService,
        toasterNotifierService: ToasterNotifierService,
        httpErrorNotifierService: HttpErrorNotifierService,
        sessionStorageService: SessionStorageService
    ) {
        if (parentModules) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
        securityService.configure(environment.security);
        logCentralService.setConfig(environment.logCentral);
        sessionStorageService.init('form');
        toasterNotifierService.setHttpNotifier({
            coveaHttpErrorEvent: httpErrorNotifierService.coveaHttpErrorEvent
        });
    }
}
