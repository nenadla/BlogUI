import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit{


  blogPosts$?: Observable<BlogPost[]>;

  constructor(private blogPostService: BlogPostService){}
  ngOnInit(): void {
    //KORISTIMO PIPE UMJESTO SUBSCRIPTIONA JER NECEMO NISTA DRUGO RADITI SA PODACIMA SAMO
    // IH ISPISATI
    
   this.blogPosts$ = this.blogPostService.getAllBlogPosts();
  }

}
