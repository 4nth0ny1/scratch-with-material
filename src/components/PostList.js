import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PostList({ posts }) {
  console.log(posts);
  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper
                elevation={10}
                key={post.id}
                sx={{ minHeight: "325px" }}
                rounded
              >
                <img
                  className="img"
                  src="https://images.unsplash.com/photo-1533094602577-198d3beab8ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="niagara.jpg"
                />
                <Box paddingX={1}>
                  <Typography component="h2" variant="h6">
                    {post.title}
                  </Typography>
                  <Typography component="p" variant="body2">
                    {post.body}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </>
        );
      })}
    </>
  );
}

// return (
//
//     <Paper elevation={3}>
//       <img
//         src="https://images.unsplash.com/photo-1533094602577-198d3beab8ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
//         alt="niagra falss"
//       />
//       <Box paddingX={1}>
//         <Typography component="h2" variant="subtitle2">
//           {poke.name}
//         </Typography>
//       </Box>
//     </Paper>
//   </Grid>
// );
