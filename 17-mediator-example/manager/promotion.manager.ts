import { Order } from "../entities";
import { Mediator } from "../mediator";

export class PromotionManager {
  constructor(private mediator: Mediator) {}

  applyPromotion(order: Order, promotionCode: string): void {
    // Logic để áp dụng khuyến mãi
    console.log(`Promotion applied to order ${order.id}: ${promotionCode}`);
    // Cập nhật giảm giá, tính điểm hoặc các chức năng khác liên quan đến khuyến mãi
  }
}
