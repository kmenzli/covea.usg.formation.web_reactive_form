import { ConfigLogServiceInterface, SecurityModuleConfig } from '@coveuse/core';

export interface Environment {
    production: boolean,
    router: any,
    security: SecurityModuleConfig,
    logCentral: ConfigLogServiceInterface
}
