import { Box,Card,CardContent } from "@mui/material";
export const QuestionCard = () => {
  return (
    <Box sx={{ minWidth: 275,margin:1 }}>
      <Card variant="outlined">
        <CardContent>...single question with options...</CardContent>
      </Card>
    </Box>
  );
};
