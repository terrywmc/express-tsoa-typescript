import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";

import { User } from "./types/user";
import { CreateUserDTO } from "./types/CreateUserDTO";
import { UserService } from "./userService";

@Route("users")
export class UserController extends Controller {
  private userService;

  constructor() {
    super();
    this.userService = new UserService();
  }

  @Get()
  public async getUsers(
    @Query() offset?: number,
    @Query() limit?: number
  ): Promise<User[]> {
    return this.userService.getAll(offset, limit);
  }
  @Get("{userId}")
  public async getUser(@Path() userId: number): Promise<User> {
    return this.userService.getOne(userId);
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createUser(@Body() requestBody: CreateUserDTO): Promise<void> {
    this.setStatus(201);
    this.userService.create(requestBody);
    return;
  }
}
