import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';
import { IUser } from '../interface/Iuser';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [FormsModule, NgClass, CommonModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  usuario: IUser = {
    nombre: '',
    correo: '',
    edad: 0,
  };
  modalAbierto: boolean = false;

  constructor(private userService: UserService) {}

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  async guardarUsuario() {
    console.log(`Datos a guardar: ${JSON.stringify(this.usuario)}`);

    this.userService.postUsers(this.usuario).subscribe({
      next: (response) => {
        console.log('✅ Usuario guardado con éxito:', response);
        this.cerrarModal();
      },
      error: (error) => {
        console.error('❌ Error al guardar usuario:', error);
      },
    });
  }
}
