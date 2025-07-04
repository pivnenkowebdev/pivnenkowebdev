import Image from "next/image";
import InfoList from "./_components/info-list";
import Subtitle from "./_components/subtitle";
import avatar from '@/app/images/ava.png';
import CustomLink from "./_components/link";

export default function Home() {
  const heroList = [
    "Программирование для подростков 12–17 лет — в индивидуальном или групповом формате",
    "Понятно, с поддержкой, в индивидуальном темпе.",
    "Первое пробное занятие — бесплатно"
  ]
  
  return (
    <main>
      <div className="px-3.75 pt-7.25 min-h-172.5 relative overflow-hidden">
        <div className="absolute top-30 w-280 h-290 bg-gray-200 -z-1 rotate-45"></div>
        <h1 className="font-bold text-3xl mb-3">Пивненко Антон</h1>
        <Subtitle>Программирование для детей и подростков</Subtitle>
        <InfoList className="mb-10" listOfItems={heroList}></InfoList>
        <CustomLink href="https://t.me/pivnenkoweb" target="_blank" className="">Получить бесплатный урок</CustomLink>
        <Image className="m-auto" src={avatar} width={165} height={339} alt="avatar"/>
      </div>
    </main>
  );
}
