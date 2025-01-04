import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <Card shadow={false} className="items-center text-center">
      <CardBody>
        <Avatar src={img} className="mb-3" alt={client} size="lg" />
        <Typography variant="h6" color="primary">
          {client}
        </Typography>
        <Typography variant="small" className="mb-3 font-medium !text-primary">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 font-normal !text-primary"
        >
          &quot;{feedback}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;