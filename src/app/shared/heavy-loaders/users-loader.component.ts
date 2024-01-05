import { Component } from "@angular/core";

@Component({
    selector: "app-users-loader",
    standalone: true,
    imports: [],
    template: `
        <div class="loader">
            <h1>Loading users...</h1>
        </div>
    `,
})
export class UsersLoaderComponent {
}