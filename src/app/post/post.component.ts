import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post?: Post;
  @Input() index: number = 0;
  constructor(
    private postService: PostService,
    private router:Router) { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
    // console.log(this.post)
  }
  onDeletePost() {
    console.log('onDeletePost')
    this.postService.deletePost(this.index)
  }
  onEdit() {
    console.log('onEdit called')
    this.router.navigate(['/post-edit', this.index])
  }
}
