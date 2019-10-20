import { ErrorHandler, Injectable } from '@angular/core';
import { NotificationService } from '../service/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private notificationService: NotificationService) { }
  
  handleError(error) {
    this.notificationService.showError(error.message);
  }
}