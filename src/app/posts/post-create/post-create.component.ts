import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'app-post-create',
    imports: [FormsModule, MatInputModule,MatCardModule,MatButtonModule],
    styleUrls: ['./post-create.component.scss'],
    templateUrl: './post-create.component.html'
})
export class PostCreateComponent {

    enteredValue = '';
    newPost = '';
    onAddPost() {

        this.newPost = this.enteredValue;
    }
}