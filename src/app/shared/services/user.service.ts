import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Création d'un behaviorSubject (voir rxjs) : permet d'utiliser un peu partout les utilisateurs
  private userSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(<User[]>{});
  // Création d'un observable à partir du behavior subject : peut etre utiliser en dehors de l'appli et partout 
  usersObs: Observable<User[]> = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

  /**
   * Retourne la liste des utilisateurs
   * @returns Observable<User[]>
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.typicode_url}/users`);
  }
  
  refreshUsers(): void {
    this.http.get<User[]>(`${environment.typicode_url}/users`).subscribe((users: User[]) => {
      //Notification (changement) de la valeur portée par le subject
      this.userSubject.next(users);
      // Tous ce qui subscribe à UsersObs sera notifié et recevra la valeur du behaviorSubject 
    })
  }

  /**
    * Retourne un utilisateurs
    * @returns Observable<User>
    */
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.typicode_url}/users/${id}`)
  }

  /**
    * Créer un utilisateur
    * @returns Observable<User>
    */
  postUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.typicode_url}/users`, user);
  }

  /**
    * Modifier un utilisateur
    * @returns Observable<User>
    */
  putUser(user: User): Observable<User> {
    return this.http.put<User>(`${environment.typicode_url}/users/${user.id}`, user)
  }
  
  /**
    * Supprimer un utilisateurs
    * @returns 
    */
  deleteUser(user: User): Observable<any> {
    return this.http.delete(`${environment.typicode_url}/users/${user.id}`)
  }
}
