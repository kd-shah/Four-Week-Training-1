import { Component } from '@angular/core';
import { BlogDataService } from 'src/app/Services/blog-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  
  blogs: any;
  constructor(private blogData : BlogDataService){
    this.blogData.blogs().subscribe((data) => {
      console.log("data", data);
      this.blogs = data;
    })
  }
}
