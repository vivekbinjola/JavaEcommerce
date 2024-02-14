import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
 

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid  item xs={12} sm={6} md={3}>
        <h1 className="pb-5 ">Company</h1>
        <div>
        <Button className="pb-5" variant="h-6" gutterBottom>About</Button>
       </div>
       <div>
        <Button className="pb-5" variant="h-6" gutterBottom>Blog</Button>
        </div>
        <div>
        <Button className="pb-5" variant="h-6" gutterBottom>Press</Button>
        </div>
        <div>
        <Button className="pb-5" variant="h-6" gutterBottom>Jobs</Button>
        </div>
        <div>
        <Button className="pb-5" variant="h-6" gutterBottom>Partners</Button>
        </div>
      </Grid>

      <Grid  item xs={12} sm={6} md={3}>
        <h2 className="pb-5 ">Solutions</h2>
        <div>
        <Button className="pb-5" variant="h-6" gutterBottom>Markteting</Button>
       </div>
       <div>
        <Button className="pb-5" variant="h-6" gutterBottom>Analytics</Button>
        </div>
        <div>
        <Button className="pb-5" variant="h-6" gutterBottom>Insights</Button>
        </div>
        <div>
        <Button className="pb-5" variant="h-6" gutterBottom>Support</Button>
        </div>
     
      </Grid>

      <Grid  item xs={12} sm={6} md={3}>
        <h2 className="pb-5  " >Documentation</h2>
        <div>
        <Button className="pb-5" variant="h-6" gutterBottom>Guides</Button>
       </div>
       <div>
        <Button className="pb-5" variant="h-6" gutterBottom>API Status</Button>
        </div>
        
      </Grid>

      <Grid  item xs={12} sm={6} md={3}>
        <h1 className="pb-5 "  >Legal</h1>
        <div>
        <Button className="pb-5" variant="h-6" gutterBottom>Claim</Button>
       </div>
       <div>
        <Button className="pb-5" variant="h-6" gutterBottom>Privacy</Button>
        </div>
        <div>
        <Button className="pb-5" variant="h-6" gutterBottom>Terms</Button>
        </div>
   
      </Grid>
      <Grid className='pt-20' item xs={12}>
        <Typography variant='body2' component="p" align="center">
          &copy; 2023 Vivek's Company. All rights reserved.
        </Typography>
        <Typography variant='body2' component="p" align="center">
          Made with love by Vivek.
        </Typography>
        <Typography variant='body2' component="p" align="center">
          Icons made by{' '}
          <Link href="https://www.freepik.com" color="inherit" underlline="always">
            Freepik
          </Link>
        </Typography>

      </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
