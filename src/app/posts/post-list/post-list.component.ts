import { Component } from "@angular/core";
import { MatExpansionPanel } from "@angular/material/expansion";
import { MatAccordion } from "@angular/material/expansion";
import { MatExpansionPanelHeader } from "@angular/material/expansion";
import { MatExpansionPanelTitle } from "@angular/material/expansion";
import { CommonModule } from "@angular/common";


@Component({
    selector: 'app-post-list',
    imports: [MatExpansionPanel, MatAccordion, MatExpansionPanelHeader, MatExpansionPanelTitle, CommonModule],
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
    posts = [
        {title: 'First Post', content: 'This is the first post\'s content'},
        {title: 'Second Post', content: 'This is the second post\'s content'},
        {title: 'Third Post', content: 'This is the third post\'s content'}
    ];
}