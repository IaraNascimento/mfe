import { Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { user, loading, isAuthenticated, signInWithGoogle, signOut } = useAuth();

  if (loading) return <p>Carregando...</p>;
  
  return <>
  <Typography variant="h4"> Login</Typography>
        {isAuthenticated ? (
        <>
          <p>Bem-vindo, {user?.displayName}</p>
          <button onClick={signOut}>Sair</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Login com Google</button>
      )}
  </>;
}
