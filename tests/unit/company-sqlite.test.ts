import CompanySQLite from "src/data/company-sqlite";
import Company from "src/service/company";
import Owner from "src/service/owner";

describe("Test the operation of DB driver CompanyDrive", () => {
  const sqliteDrive = new CompanySQLite();
  const canaCaiana = new Company("Cana caiana LTDA", "Cana caiana", "01123456000151", {
    name: "José Severino",
    cpf: "11122233344",
  });

  afterAll(() => {
    sqliteDrive.clear();
  });

  test("Create a company", () => {
    sqliteDrive.create(canaCaiana);

    expect(sqliteDrive.readAll().length).toEqual(1);
  });

  test("Read a company", () => {
    const company = sqliteDrive.read("1");

    expect(company?.fantasy).toEqual(canaCaiana.fantasy);
    expect(company?.companyName).toEqual(canaCaiana.companyName);
    expect(company?.cnpj).toEqual(canaCaiana.cnpj);
    expect(company?.owners[0].name).toEqual(canaCaiana.owners[0].name);
  });

  test("List all companys", () => {
    const companys = sqliteDrive.readAll();
    expect(companys.length).toEqual(1);
    expect(companys.find((comp) => comp.fantasy === canaCaiana.fantasy)).toBeDefined();
  });

  test("Update a company", () => {
    sqliteDrive.update("1", {
      companyName: "Cana-caiana S/A",
      owners: [new Owner("Adauto Pedro", "115544455522", canaCaiana)],
    });

    const canaSA = sqliteDrive.read("1");

    expect(canaSA.companyName).toEqual("Cana-caiana S/A");
    expect(canaSA?.owners[0].name).toEqual("Adauto Pedro");
  });

  test("Delete a company", () => {
    sqliteDrive.delete("1");

    expect(sqliteDrive.readAll().length).toEqual(0);
  });
});
