
import { Card } from "./ui/card"

export default function ImageExample() {
  return (
    <Card className="p-4">
      <img 
        src="/images/your-image.jpg" 
        alt="Description of image"
        className="rounded-lg shadow-md max-w-full h-auto"
      />
    </Card>
  );
}
