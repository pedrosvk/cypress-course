describe('empty spec', () => {
  it('passes', () => {
    cy.log('hello world');
  });
  it('Typescript Introduction', () => {
    let stringVariable: string = '9';
    let numberVariable: number = 0;
    let booleanVariable: boolean = true;
    let anyVariable: any = false;

    function addTwoNumbers(a: number, b: number): number {
      // void expects to not return anything
      return a + b;
    }

    interface User {
      // inside object/interface with properties + type string
      username: string;
      password: string;
    }

    function returningUserInformation(user: User): void {
      console.log('This is the user name' + user.username);
      console.log('This is the password' + user.password);
    }
  });
});
