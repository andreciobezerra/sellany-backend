import CompanyInMemory from "@src/data/company-in-memory";
import Company from "@src/service/company";
import Owner from "@src/service/owner";

describe("Test the CRUD operations of DBDriver CompanyInMemory", () => {
  const canaCaiana = new Company("Cana caiana LTDA", "Cana caiana", "01123456000151", {
    name: "José Severino",
    cpf: "11122233344",
  });

  const companyDrive = new CompanyInMemory();

  test("Create an company", () => {
    companyDrive.create(canaCaiana);

    expect(companyDrive.data[0].fantasy).toEqual(canaCaiana.fantasy);
  });

  test("Read a company", () => {
    const company = companyDrive.read("1");

    expect(company).toMatchObject(canaCaiana);
  });

  test("Read all companys", () => {
    const companys = companyDrive.readAll();

    expect(Array.isArray(companys)).toBeTruthy();
    expect(companys.length).toEqual(1);
    expect(companys).toContainEqual(canaCaiana);
  });

  test("Update a company", () => {
    companyDrive.update("1", {
      fantasy: "Cana-caiana",
      owners: [new Owner("Adauto Pedro", "115544455522", canaCaiana)],
    });
    const cana = companyDrive.read("1");

    expect(cana.fantasy).toEqual("Cana-caiana");
    expect(
      cana.owners.findIndex((owner: { name: string }) => owner.name === "José Severino")
    ).toEqual(-1);
    expect(
      cana.owners.findIndex((owner: { name: string }) => owner.name === "Adauto Pedro")
    ).toBeGreaterThan(-1);
  });

  test("Delete a company", () => {
    companyDrive.delete("1");

    expect(companyDrive.data.length).toEqual(0);
    expect(companyDrive.read("1")).toBeUndefined();
  });
});
