import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root'})
export class PostService {
  listOfPosts: Post[] = [
    new Post(
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reprehenderit, necessitatibus culpa sequi, nulla ex praesentium provident consequuntur eaque nihil cupiditate velit libero eligendi fugiat maiores tempora facere sunt saepe quia vel voluptate fuga molestiae a. Consequuntur delectus pariatur magni, nihil, aspernatur ullam amet esse dolorum et inventore illo sapiente exercitationem sint neque quo sequi fuga? Atque vel molestias asperiores sed error quae ad sequi repudiandae quod dolore debitis suscipit consequatur labore hic nesciunt, maiores illum, unde officiis assumenda incidunt, ex voluptate qui omnis dolor. Iusto sunt libero nesciunt provident ipsum deserunt. Consequatur recusandae quidem vel facere ullam illo ratione.',
      'https://divedigital.id/wp-content/uploads/2020/06/polynesia-3021072_1280.jpg',
      'test@test.com',
      new Date
    ),
    new Post(
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reprehenderit, necessitatibus culpa sequi, nulla ex praesentium provident consequuntur eaque nihil cupiditate velit libero eligendi fugiat maiores tempora facere sunt saepe quia vel voluptate fuga molestiae a. Consequuntur delectus pariatur magni, nihil, aspernatur ullam amet esse dolorum et inventore illo sapiente exercitationem sint neque quo sequi fuga? Atque vel molestias asperiores sed error quae ad sequi repudiandae quod dolore debitis suscipit consequatur labore hic nesciunt, maiores illum, unde officiis assumenda incidunt, ex voluptate qui omnis dolor. Iusto sunt libero nesciunt provident ipsum deserunt. Consequatur recusandae quidem vel facere ullam illo ratione.',
      'https://divedigital.id/wp-content/uploads/2020/06/polynesia-3021072_1280.jpg',
      'test@test.com',
      new Date
    ),
    new Post(
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reprehenderit, necessitatibus culpa sequi, nulla ex praesentium provident consequuntur eaque nihil cupiditate velit libero eligendi fugiat maiores tempora facere sunt saepe quia vel voluptate fuga molestiae a. Consequuntur delectus pariatur magni, nihil, aspernatur ullam amet esse dolorum et inventore illo sapiente exercitationem sint neque quo sequi fuga? Atque vel molestias asperiores sed error quae ad sequi repudiandae quod dolore debitis suscipit consequatur labore hic nesciunt, maiores illum, unde officiis assumenda incidunt, ex voluptate qui omnis dolor. Iusto sunt libero nesciunt provident ipsum deserunt. Consequatur recusandae quidem vel facere ullam illo ratione.',
      'https://divedigital.id/wp-content/uploads/2020/06/polynesia-3021072_1280.jpg',
      'test@test.com',
      new Date
    )
  ]
  getPosts() {
    return this.listOfPosts;
  }

  deletePost(index: number) {
    this.listOfPosts.splice(index, 1)
  }

  addPost(post: Post){
    this.listOfPosts.push(post)
  }

  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post
  }
}
