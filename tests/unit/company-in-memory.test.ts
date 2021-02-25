import CompanyInMemory from "@src/models/db-drives/company-in-memory";
import Company from "@src/models/entities/company";
import Owner from "@src/models/entities/owner";

describe("Teste the CRUD operations of DBDriver CompanyInMemory", () => {
  const canaCaiana = new Company("Cana caiana LTDA", "Cana caiana", "01123456000151", {
    name: "José Severino",
    cpf: "11122233344",
  });

  const companyDrive = new CompanyInMemory();

  test("Create an company", () => {
    companyDrive.create(canaCaiana);

    expect(companyDrive.data.includes({ ...canaCaiana })).toBeTruthy;
  });

  test("Read a company", () => {
    const company = companyDrive.read("1");

    expect(company.fantasy).toEqual("Cana caiana");
    expect(company.companyName).toEqual("Cana caiana LTDA");
    expect(company.cnpj).toEqual("01123456000151");
    expect(company.owners.findIndex((owner) => owner.name === "José Severino")).toBeGreaterThan(-1);
  });

  test("Read all companys", () => {
    const companys = companyDrive.readAll();

    expect(Array.isArray(companys)).toBeTruthy;
    expect(companys.includes(canaCaiana)).toBeTruthy;
  });

  test("Update a company", () => {
    companyDrive.update("1", {
      fantasy: "Cana-caiana",
      owners: [new Owner("Adauto Pedro", "115544455522", canaCaiana)],
    });
    const cana = companyDrive.read("1");

    expect(cana.fantasy).toEqual("Cana-caiana");
    expect(cana.owners.findIndex((owner) => owner.name === "José Severino")).toEqual(-1);
    expect(cana.owners.findIndex((owner) => owner.name === "Adauto Pedro")).toBeGreaterThan(-1);
  });

  test("Delete a company", () => {
    companyDrive.delete("1");

    expect(companyDrive.data.includes({ ...canaCaiana })).toBeFalsy;
  });
});
