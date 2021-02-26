import SalesmanInMemory from "@src/models/db-drives/salesman-in-memory";
import Company from "@src/models/entities/company";
import Salesman from "@src/models/entities/salesman";

describe("Test the CRUD operations of DBDriver SalesmanInMemory", () => {
  const canaCaiana = new Company("Cana caiana LTDA", "Cana caiana", "01123456000151", {
    name: "José Severino",
    cpf: "11122233344",
  });

  const james = new Salesman("James Watson", "11122233344", canaCaiana);
  const salesmanDrive = new SalesmanInMemory();

  test("Create a Salesman", () => {
    salesmanDrive.create(james);

    expect(salesmanDrive.data[0].name).toEqual(james.name);
  });

  test("Read a salesman", () => {
    const salesman = salesmanDrive.read("1");

    expect(salesman.name).toEqual(james.name);
    expect(salesman.cpf).toEqual(james.cpf);
    expect(salesman.company.fantasy).toEqual(canaCaiana.fantasy);
  });

  test("Read all salesmen", () => {
    const salesmen = salesmanDrive.readAll();

    expect(salesmen.length).toEqual(1);
    expect(salesmen.find((sm) => sm.name === james.name)).toBeDefined();
  });

  test("Update a salesman", () => {
    salesmanDrive.update("1", { name: "James Rodrigues" });
    const jamesRodrigues = salesmanDrive.read("1");

    expect(jamesRodrigues.name).toEqual("James Rodrigues");
    expect(jamesRodrigues.cpf).toEqual(james.cpf);
  });

  test("Delete a salesman", () => {
    salesmanDrive.delete("1");

    expect(salesmanDrive.data.length).toEqual(0);
  });
});
