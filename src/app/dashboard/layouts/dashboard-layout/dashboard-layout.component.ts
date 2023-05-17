import { Component, OnInit, computed, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent {
  private authService = inject(AuthService);

  public user = computed(() => this.authService.currentUser());

  /**
   * @Get the current user
   */
  get User() {
    return this.authService.currentUser();
  }

  logout(): void {
    this.authService.logout();
  }
}
