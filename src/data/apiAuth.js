//-----------------------------------------------------------------------------------
// import { useQuery } from "@tanstack/react-query";
// import { getCabins } from "../../data/apiCabins";

// export default function useGetCabins() {
//   const {
//     isLoading,
//     data: cabins,
//     error,
//   } = useQuery({
//     queryKey: ["cabins"],
//     queryFn: getCabins,
//   });
//   return { isLoading, cabins, error };
// }
//-----------------------------------------------------------------------------------
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { appAuth } from "./firebase-config";

export async function registerFunction(args) {
  try {
    const { operationType } = await createUserWithEmailAndPassword(
      appAuth,
      args?.userEmail,
      args?.userPassword
    );

    return operationType;
  } catch (error) {
    throw new Error("Try Another Email Or Test Your Connection");
  }
}
export async function loginFunction(args) {
  try {
    const { user } = await signInWithEmailAndPassword(
      appAuth,
      args?.userEmail,
      args?.userPassword
    );
    const { email } = user;
    return email;
  } catch (error) {
    throw new Error("You Have An Error In Emial Or Password");
  }
}
export async function logoutFunction() {
  await signOut(appAuth);
}
