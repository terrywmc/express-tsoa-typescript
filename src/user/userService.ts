import { User } from "./types/user";
import { CreateUserDTO } from "./types/CreateUserDTO";

export class UserService {
  private users: User[];
  static instance: UserService;

  constructor() {
    this.users = [];
    if (UserService.instance) {
      return UserService.instance;
    }
    UserService.instance = this;
  }

  public getAll(offset: number = 0, limit: number = 10): User[] {
    // console.log({ alluser: this.users.slice(offset, offset + limit) });
    return this.users.slice(offset, offset + limit);
  }

  public getOne(id: number): User {
    const chek = this.users.find((c) => c.id === id);
    if (chek === undefined) {
      console.log("Not present");
      return;
    } else {
      return chek;
    }
  }

  public create(CreateUserDTO: CreateUserDTO): User {
    const user: User = {
      id: Math.floor(Math.random() * 10000),
      status: "Happy",
      ...CreateUserDTO,
    };
    this.users.push(user);
    // console.log(this.users);
    return user;
  }
}
