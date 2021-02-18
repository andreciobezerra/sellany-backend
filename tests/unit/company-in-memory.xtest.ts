describe("Teste the CRUD operations of DBDriver ComapnyInMemory", () => {
  const cana = {
    companyName: "Cana caiana LTDA",
    fantasy: "Cana caiana",
    cnpj: "01123456000151",
    owerns: ["José Severino"],
  };

  /* test("Create an company", () => {
    companyDrive.create(cana);

    expect(companyDrive.data.includes({ ...cana })).toBeTruthy;
  });

  test("Read a company", () => {
    const company = companyDrive.read("1");

    expect(company.name).toEqual("Cana caiana");
    expect(company.companyName).toEqual("Cana caiana LTDA");
    expect(company.cnpj).toEqual("01123456000151");
    expect(company.owerns.includes("José Severino")).toBeTruthy;
  });

  test("Read all companys", () => {
    const companys = companyDrive.readAll();

    expect(Array.isArray(companys)).toBeTruthy;
    expect(companys.includes(cana)).toBeTruthy;
  });

  test("Update a company", () => {
    companyDrive.update("1", { name: "Cana-caiana", owners: ["Adauto Pedro"] });
    const cana = companyDrive.read("1");

    expect(cana.name).toEqual("Cana-caiana");
    expect(cana.owerns.includes("José Severino")).toBeTruthy;
    expect(cana.owerns.includes("Adauto Pedro")).toBeTruthy;
  });

  test("Delete a company", () => {
    companyDrive.delete("1");

    expect(companyDrive.data.includes({ ...cana })).toBeFalsy;
  }); */
});
