import { Environment } from '@env/environment.interfaces';
import * as merge from 'lodash.merge';

let properties: Environment = {
    production: true,
    router: {
        enableTracing: false
    },
    security: {
        endpointUrl: ''
    },
    logCentral: {
        isEnable: true,
        handlerLogUrl: ''
    }
};

export const environment: Environment = merge(properties, window['COVEUSE_CONFIG']);