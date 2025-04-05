import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './contact.component.html',
  
})
export class ContactComponent {

  name = '';
  email = '';
  message = '';

  submitForm() {
    alert(`Mensaje enviado por: ${this.name}`);
  }

}
