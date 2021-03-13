import OrderInMemory from "@src/data/order-in-memory";
import Client from "@src/service/client";
import Company from "@src/service/company";
import Order from "@src/service/order";
import Salesman from "@src/service/salesman";

describe("Test the CRUD operations of DBDriver OrderInMemory", () => {
  const canaCaiana = new Company("Cana caiana LTDA", "Cana caiana", "01123456000151", {
    name: "José Severino",
    cpf: "11122233344",
  });

  const samael = new Client("Samael Lúcifer", "11166633322");
  const james = new Salesman("James Roger", "22233344455", canaCaiana);
  const order1 = new Order(canaCaiana, samael, james);
  const orderDrive = new OrderInMemory();

  test("Create an order", () => {
    orderDrive.create(order1);

    expect(orderDrive.data.includes({ ...order1 })).toBeTruthy;
  });

  test("Read an order", () => {
    const order = orderDrive.read("1");

    expect(order.company.fantasy).toEqual("Cana caiana");
    expect(order.client.name).toEqual("Samael Lúcifer");
    expect(order.salesman.name).toEqual("James Roger");
  });

  test("Read all orders", () => {
    const orders = orderDrive.readAll();

    expect(orders.length).toEqual(1);
    expect(orders.find((order) => order.client === order1.client)).toBeDefined();
  });

  test("Update an order", () => {
    const licia = new Salesman("Licia Maria", "12345678910", canaCaiana);

    orderDrive.update("1", { salesman: licia });

    const order1 = orderDrive.read("1");

    expect(order1.salesman.name).toEqual("Licia Maria");
    expect(order1.salesman.cpf).toEqual("12345678910");
    expect(order1.client.name).toEqual("Samael Lúcifer");
  });

  test("Delete an order", () => {
    orderDrive.delete("1");

    expect(orderDrive.data.length).toEqual(0);
  });
});
