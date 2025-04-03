import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <Image
        src="/placeholder-logo.png" // Substituído pelo novo logo
        alt="Placeholder Logo"
        width={150}
        height={50}
      />
    </header>
  );
}