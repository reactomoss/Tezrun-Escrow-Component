import React from "react";
import { Box, Card, CardContent, Container } from "@mui/material";
import { Unity, useUnityContext } from "react-unity-webgl";
import { MainLayout } from "components/main-layout";
import { Escrow } from "components/escrow";

const unityConfig = {
  loaderUrl: "Build/public.loader.js",
  dataUrl: "Build/public.data.unityweb",
  frameworkUrl: "Build/public.framework.js.unityweb",
  codeUrl: "Build/public.wasm.unityweb",
};

const Play = () => {
  const unityContext = useUnityContext(unityConfig);

  return (
    <MainLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Card>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                minHeight: "540px",
              }}
            >
              <Unity
                unityProvider={unityContext.unityProvider}
                style={{
                  height: 540,
                  width: 950,
                  background: "#555",
                }}
              />
            </CardContent>
          </Card>
          <Card sx={{ mt: 3 }}>
            <Escrow unityContext={unityContext}></Escrow>
          </Card>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Play;
