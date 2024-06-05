import { 
  Card, 
  Table, 
  Stack, 
  Typography, 
  Container, 
  Divider, 
  Box, 
  Chip,
} from "@mui/material";

import { useAppSelector } from "@/lib/hooks";

export default function ProductInfoCard() {

  const productInfo = useAppSelector(state => ({
    image: state.product.image,
    title: state.product.title,
    subtitle: state.product.subtitle,
    tags: state.product.tags,
    id: state.product.id,
  }));

  return (
    <Card style={{ height: "100%" }}>
      <Stack display="flex" justifyContent="center">
        <img 
          src={productInfo.image}
          alt={`product-${productInfo.id}`}
        />
        <Typography variant="h4" align="center">{productInfo.title}</Typography>
        <Typography variant="subtitle1" align="center" color="gray">{productInfo.subtitle}</Typography>
        <Divider />
        <Box
          padding={4}
          display="flex"
          justifyContent="center"
        >
          {productInfo.tags.map(tag => (
            <Chip 
              label={tag}
              key={tag}
              variant="outlined"
              sx={{ marginX: 1 }} 
            />
          ))}
        </Box>
        <Divider />
      </Stack>
    </Card>
  );
};