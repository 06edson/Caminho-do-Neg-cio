import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <Image
        src="/logo.png" // Caminho para o seu logo
        alt="Nome da sua empresa" // Descrição do logo
        width={150} // Largura do logo
        height={50}  // Altura do logo
      />
    </header>
  );
}