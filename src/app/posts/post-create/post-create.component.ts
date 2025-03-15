import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";

@Component({
    selector: 'app-post-create',
    imports: [FormsModule, MatInputModule,MatCardModule],
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