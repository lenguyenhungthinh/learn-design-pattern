import { User } from "../entities";
import { Mediator } from "../mediator";

export class UserManager {
  constructor(private mediator: Mediator) {}

  getUserActivity(user: User): void {
    // Logic để theo dõi hoạt động của người dùng
    console.log(`User activity tracked for ${user.name}`);
    // Cập nhật các thống kê, điểm thưởng, hoặc các chức năng khác liên quan đến người dùng
  }
}
