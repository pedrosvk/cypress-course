describe('Excel playground', () => {
  it('read data from excel', () => {
    cy.parseXlsx('cypress/fixtures/excelData.xlsx').then((jsonData: any) => {
      //Check what it is returning
      cy.log(jsonData);
      cy.log(jsonData[0].data);
      let data: [] = jsonData[0].data;
      let dataLength = data.length;

      data.forEach((row) => {
        cy.log(row[0]); // requires "node-xlsx" plugin
        cy.log(row[1]);
      });

      data.forEach((row) => {
        cy.writeFile('cypress/fixtures/excelData.json', {
          username: row[0],
          parssword: row[1],
        });
      });
    });
  });
});
