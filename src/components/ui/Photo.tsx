import Image from "next/image";
export function Photo({
  name,
  alt = "",
  className = "",
  priority = false,
  sizes = "100vw",
}: {
  name: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={`/images/${name}.webp`}
      alt={alt}
      fill
      sizes={sizes}
      preload={priority}
      className={`photo ${className}`}
    />
  );
}
