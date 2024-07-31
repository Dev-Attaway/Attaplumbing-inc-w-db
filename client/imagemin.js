import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

// Optimize images
async function optimizeImages() {
  try {
    const files = await imagemin(["public/yelp-stars/*.{jpg,png,webp}"], {
      destination: "public/",
      plugins: [imageminWebp({ quality: 20 })],
    });

    console.log("Images optimized:");
    files.forEach((file) => console.log(file.destinationPath));
  } catch (error) {
    console.error("Image optimization failed:", error);
  }
}

optimizeImages();
