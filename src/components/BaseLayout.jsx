import { AppBar, Box, Button,  Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

  export default function BaseLayout({children}){
    const navigate = useNavigate();
    return(
        <>
        <AppBar component="nav">
            <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography
            variant="h6"
            component="div"
            onClick={()=>navigate("/")}
          >
             Service
          </Typography>
          <Box >
          
              <Button  sx={{ color: '#fff' }} variant="contained" onClick={()=> navigate("services/add")}>{"ADD NEW SERVICE"}
              </Button>
          </Box>

            </Toolbar>
        </AppBar>
        {children}
        </>
    )
  }