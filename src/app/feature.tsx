"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CameraIcon,
  UserGroupIcon,
  TrophyIcon,
  NewspaperIcon
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: UserGroupIcon,
    title: "Comunidades",
    children:
      "O Gym Games é um app em que você pode entrar em comunidades e formar equipes dentro delas. Nessas comunidades, vocês competem para ver quem é mais constante nos exercícios.",
  },
  {
    icon: CameraIcon,
    title: "Postar",
    children:
      "Postando uma foto você acumula pontos que contribuem para sua pontuação individual e de equipe",
  },
  {
    icon: NewspaperIcon,
    title: "Feed",
    children:
      "Pelo feed você consegue acompanhar os seus companheiros e interagir com suas fotos",
  },
  {
    icon: TrophyIcon,
    title: "Ranking",
    children:
      "Pelo ranking você consegue acompanhar quem está a frente na competição de equipes e individual. É preciso atingir as metas para vencer!",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography className="mb-2 font-bold uppercase text-primary">
          Sua rede social de exercícios
        </Typography>
        <Typography variant="h1" className="mb-4 text-primary">
          Use o Gym games para aumentar a motivação do seu grupo!
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-primary lg:w-11/12 lg:px-8 "
        >
          Participe de competições emocionantes, acompanhe o progresso de todos e conquiste suas metas de forma divertida e colaborativa. 
          Transforme o treino em um jogo e torne a jornada fitness ainda mais empolgante com seus amigos!
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
