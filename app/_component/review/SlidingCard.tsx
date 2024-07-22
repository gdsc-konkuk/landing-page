import Image from 'next/image';
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import reviewCardBuildwithAI from '../../../public/images/review/reviewCardBuildwithAI.png';
import reviewCardDanggn from "../../../public/images/review/reviewCardDanggn.png";
import reviewCardFlutter from "../../../public/images/review/reviewCardFlutter.png";
import reviewCardGDSCGermany from "../../../public/images/review/reviewCardGDSCGermany.png";
import reviewCardGraduation from "../../../public/images/review/reviewCardGraduation.png";
import reviewCardHanyang from "../../../public/images/review/reviewCardHanyang.png";
import reviewCardKprintf from "../../../public/images/review/reviewCardKprintf.png";
import reviewCardMTandTrip from "../../../public/images/review/reviewCardMTandTrip.png";
import reviewCardRegularSeminar from "../../../public/images/review/reviewCardRegularSeminar.png";
import reviewCardWRTN from "../../../public/images/review/reviewCardWRTN.png";

const cards = [
  reviewCardBuildwithAI,
  reviewCardDanggn,
  reviewCardFlutter,
  reviewCardGDSCGermany,
  reviewCardGraduation,
  reviewCardHanyang,
  reviewCardKprintf,
  reviewCardMTandTrip,
  reviewCardRegularSeminar,
  reviewCardWRTN,
];

export default function SlidingCard() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center space-x-[16px]">
                  <Image src={card} alt={`Review Card ${index + 1}`} className="w-[552px] h-[371px] rounded-[22px]" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
