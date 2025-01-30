import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { CommonModule, NgFor } from '@angular/common';
import { NewUserComponent } from '../new-user/new-user.component';
import { IUser } from '../interface/Iuser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor, NewUserComponent, CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  users: IUser[] = [];
  hoverRow: number | undefined = undefined;
  userToEdit: IUser | null = null; 

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error al obtener los usuarios:', err);
      },
    });
  }

  eliminarUsuario(id: any): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== id);
    });
  }

  editarUsuario(user: IUser): void {
    this.userToEdit = { ...user }; 
  }

  actualizarUsuario(): void {
    if (this.userToEdit) {
      this.userService
        .updateUser(this.userToEdit.id!, this.userToEdit)
        .subscribe({
          next: (updatedUser) => {
          
            const index = this.users.findIndex(
              (user) => user.id === updatedUser.id
            );
            if (index !== -1) {
              this.users[index] = updatedUser;
            }
            this.userToEdit = null; 
          },
          error: (error) => {
            console.error('Error al actualizar el usuario:', error);
          },
        });
    }
  }
}
