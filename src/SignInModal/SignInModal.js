import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Dialog, DialogTitle, useTheme, Box, Button } from "@mui/material";
import { useEffect } from "react";

export default function SignInScreen(props) {
  const {
    auth,
    isSignedIn,
    setIsSignedIn,
    uiConfig,
    onClose,
    isSignInModalOpen,
  } = props;

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [auth, setIsSignedIn, isSignedIn]);

  const theme = useTheme();

  if (uiConfig !== undefined) {
    return (
      <Dialog
        fullWidth
        maxWidth="xs"
        onClose={onClose}
        open={isSignInModalOpen}
      >
        <DialogTitle sx={{ color: theme.palette.text.primary }}>
          {isSignedIn ? "Log out of Flavali" : "Log into Flavali"}
        </DialogTitle>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{
            marginLeft: theme.spacing(3),
            paddingBottom: theme.spacing(3),
          }}
        >
          {isSignedIn ? (
            <Button
              variant="outlined"
              sx={{ width: theme.spacing(20) }}
              onClick={() => auth.signOut()}
            >
              Log out
            </Button>
          ) : (
            <p>Please log in</p>
          )}
          {!isSignedIn ? (
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          ) : null}
        </Box>
      </Dialog>
    );
  }

  return null;
}

