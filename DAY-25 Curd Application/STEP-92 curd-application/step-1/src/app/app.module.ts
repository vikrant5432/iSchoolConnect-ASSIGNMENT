import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { iSchoolUserService } from './user.services';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { userListComponent } from './userList.component';
import { addUserComponent } from './addUser.component';
import { editUserComponent } from './editUser.component';

@NgModule({
  declarations: [
    AppComponent,
    userListComponent,
    addUserComponent,
    editUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: userListComponent },
      { path: 'add', component: addUserComponent },
      { path: 'edit/:uid', component: editUserComponent },
    ]),
  ],
  providers: [iSchoolUserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
