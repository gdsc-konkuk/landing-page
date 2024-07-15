import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import reviewCardBuildwithAI from '../../../public/images/review/reviewCardBuildwithAI.jpeg';
import reviewCardDanggn from "../../../public/images/review/reviewCardDanggn.jpeg";
import reviewCardFlutter from "../../../public/images/review/reviewCardFlutter.jpeg";
import reviewCardGDSCGermany from "../../../public/images/review/reviewCardGDSCGermany.jpeg";
import reviewCardGraduation from "../../../public/images/review/reviewCardGraduation.jpeg";
import reviewCardHanyang from "../../../public/images/review/reviewCardHanyang.jpeg";
import reviewCardKprintf from "../../../public/images/review/reviewCardKprintf.jpeg";
import reviewCardMTandTrip from "../../../public/images/review/reviewCardMTandTrip.jpeg";
import reviewCardRegularSeminar from "../../../public/images/review/reviewCardRegularSeminar.jpeg";
import reviewCardWRTN from "../../../public/images/review/reviewCardWRTN.jpeg";

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
                <CardContent className="flex aspect-square items-center justify-center space-x-[16px]">
                  <img src={card} alt={`Review Card ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
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
