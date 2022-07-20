import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  form!:FormGroup
  index?:number= undefined;
  constructor(
    private postService:PostService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let title: string = ''
    let description: string = ''
    let imagePath: string = ''
    this.route.params.subscribe((params: Params) => {
      if (params['index']){
        console.log(params['index'])
        this.index= params['index']
        const post = this.postService.getPost(this.index)
        title= post.title ?? ''
        description= post.description ?? ''
        imagePath= post.imagePath ?? ''

      }
    })
    this.form = new FormGroup({
      title: new FormControl(title, [
        Validators.required,
        Validators.maxLength(10)
      ]),
      description: new FormControl(description, [
        Validators.required
      ]),
      imagePath: new FormControl(imagePath, [
        Validators.required
      ])
    })
  }

  onSubmit() {
    const title = this.form.value.title
    const description = this.form.value.description
    const imagePath = this.form.value.imagePath
    const post:Post = new Post(
      title,
      description,
      imagePath,
      "test@test.com",
      new Date(),
      0
    )
    if(this.index){
      this.postService.updatePost(this.index, post)
    }else{
      this.postService.addPost(post)
    }
    this.router.navigate(['/post-list'])
  }

}
