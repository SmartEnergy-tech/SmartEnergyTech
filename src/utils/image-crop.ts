// lib/cropImage.ts
export const getCroppedImg = async (
  imageSrc: string,
  pixelCrop: { x: number; y: number; width: number; height: number },
  outputSize: number = 1024 // 1024px = perfect for all platforms (X, Discord, Telegram, etc.)
): Promise<string> => {
  const image = new Image();
  image.src = imageSrc;
  image.crossOrigin = "anonymous";

  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  canvas.width = outputSize;
  canvas.height = outputSize;

  // Super important for sharpness on high-DPI screens
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high"; // This is the key!

  // Optional: white background (uncomment if you don't want transparency)
  // ctx.fillStyle = '#ffffff';
  // ctx.fillRect(0, 0, outputSize, outputSize);

  // Draw image with maximum sharpness
  ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, outputSize, outputSize);

  // Create perfect circular mask (transparent outside)
  ctx.globalCompositeOperation = "destination-in";
  ctx.beginPath();
  ctx.arc(outputSize / 2, outputSize / 2, outputSize / 2, 0, Math.PI * 2);
  ctx.fill();

  // Optional soft anti-aliased edge (very subtle, looks premium)
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(outputSize / 2, outputSize / 2, outputSize / 2 - 1, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(0,0,0,0.05)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Return as high-quality PNG
  return canvas.toDataURL("image/png", 1.0); // 1.0 = maximum quality
};
