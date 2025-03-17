import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { PostsService } from "../posts.service";

@Component({
    selector: 'app-post-create',
    imports: [FormsModule, MatInputModule,MatCardModule,MatButtonModule,CommonModule],
    styleUrls: ['./post-create.component.scss'],
    templateUrl: './post-create.component.html'
})
export class PostCreateComponent {

    enteredTitle = '';
    enteredContent = '';
    // @Output() postCreated = new EventEmitter<Post>();

    constructor(public postsService: PostsService) {}

    onAddPost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        // const post = {title: form.value.title, content: form.value.content};
        // this.postCreated.emit(post);
        this.postsService.addPost(form.value.title, form.value.content);
    }
}