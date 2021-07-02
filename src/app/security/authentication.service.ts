import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly JWT_KEY = 'ipi_jwt';

  constructor(private router: Router) {
  }

  login(username: string, password: string): void {
    if (username === 'IPI' && password === 'M1CDP') {
      localStorage.setItem(this.JWT_KEY, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o');
      this.router.navigate(['/']);
    }
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.JWT_KEY)
  }

  getToken(): string | null {
    return localStorage.getItem(this.JWT_KEY);
  }
}
