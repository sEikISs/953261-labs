// 953261 Lab 2 — Kad Café daily report
// Run:  npm start
import { menu } from "./data/menu.js";
import { orders } from "./data/orders.js";
import { menuLine, orderTotal, averageOrder, cheapDrinks } from "./src/cafe.js";

console.log("=== Kad Café menu ===");
menu.forEach((item) => console.log(menuLine(item)));

console.log("\n=== Today's orders ===");
orders.forEach((order) => {
  const total = orderTotal(order, menu);
  console.log(`${order.id} ${order.customer} — ${total} THB`);
  });
console.log("\n=== Summary ===");
const totalSales = orders.reduce((sum, order) => sum + orderTotal(order, menu), 0);
const avgOrder = averageOrder(orders, menu);

console.log(`Orders: ${orders.length}`);
console.log(`Total sales: ${totalSales} THB`);
console.log(`Average order: ${avgOrder} THB`);

const affordableDrinks = cheapDrinks(menu, 60);
console.log(affordableDrinks);