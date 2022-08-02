// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from '@env/environment.interfaces';
import * as merge from 'lodash.merge';

export const environment: Environment = merge({
    production: false,
    router: {
        enableTracing: true
    },
    security: {
        endpointUrl: 'http://localhost:3000/api'
    },
    logCentral: {
        isEnable: true,
        handlerLogUrl: 'http://localhost:3000/api/logs'
    }
}, window['COVEUSE_CONFIG']);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
