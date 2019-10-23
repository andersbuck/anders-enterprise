import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { NotificationService } from '../service/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../service/error.service';
import { LoggingService } from '../service/logging.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    // Error handling is important and needs to be loaded first.
    // Because of this we should manually inject the services with Injector.
    constructor(private injector: Injector) { }

    handleError(error: Error | HttpErrorResponse) {

        const errorService = this.injector.get(ErrorService);
        const logger = this.injector.get(LoggingService);
        const notifier = this.injector.get(NotificationService);

        let message;
        let stackTrace;

        if (error instanceof HttpErrorResponse) {
            // Server Error
            message = errorService.getServerMessage(error);
            stackTrace = errorService.getServerStack(error);
            notifier.showError(message);
        } else {
            // Client Error
            message = errorService.getClientMessage(error);
            stackTrace = errorService.getClientStack(error);
            notifier.showError(message);
        }

        // TODO only log client errors
        logger.logError(message, stackTrace);

        console.error(error);
    }
}
