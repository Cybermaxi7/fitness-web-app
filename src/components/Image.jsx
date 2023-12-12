export default function Image({ src, alt, className }) {
    return (
        <img
            src={src}
            alt={alt}
            className={`${className} w-full h-full object-cover`}
            loading="lazy"
        />
    );
}
