import IAccess, { signInData, user } from "./iaccess";

export default abstract class Acccess implements IAccess {
  signIn(data: signInData): string {
    throw new Error("Method not implemented.");
  }

  signOut(): void {
    throw new Error("Method not implemented.");
  }

  abstract signUp(data: user): void;
}
