import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

export const Result=()=> {

  return (
    <Card variant="outlined" sx={{ pt: 3, pb: 3 }}>
      <CardContent>
        <Typography
          sx={{ display: "flex", justifyContent: "center", mb: 3 }}
          variant="h4"
          color="text.secondary"
        >
          Result
        </Typography>
        {
          <Typography
            sx={{ display: "flex", justifyContent: "center", mb: 3 }}
            variant="h4"
            color="text.secondary"
          >
           correct answers/total questions
          </Typography>
        }
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outlined">
          Retry
        </Button>
      </CardActions>
    </Card>
  );
}
