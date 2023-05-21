import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { LightBulbIcon } from "@heroicons/react/24/outline";
import Carrusel from "./Carrusel";
import { pics } from "./Data";

export function Template2() {
  return (
    <div className="bg-gray-00 h-full">
      <Card
        shadow={false}
        className="max-full relative grid h-[50rem] w-full items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none "
        >
          <Carrusel className="carrusel" images={pics} />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative px-6 py-14 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            Plaza Principal de Tiquipaya
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            Univalle Cochabamba
          </Typography>
          <Avatar
            size="xl"
            variant="circular"
            alt="candice wu"
            className="border-2 border-white"
            src="/img/logo.png"
          />
        </CardBody>
      </Card>
      <section className="-mt-12 flex h-full flex-col  divide-y px-4 pb-20 pt-4">
        <Card className="h-full w-full flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src="/img/map.png"
              alt="image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <IconButton
              variant="gradient"
              size="lg"
              color="green"
              className="pointer-events-none rounded-full"
            >
              <LightBulbIcon className="h-6 w-6 text-white" />
            </IconButton>
            <Typography variant="h4" color="blue-gray" className="mb-2 mt-5">
              Información sobre la Plaza Principal de Tiquipaya
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software
              company selling licenses. Yet its own business model disruption is
              only part of the story
            </Typography>
          </CardBody>
        </Card>
      </section>
      <footer className="w-full h-32 bg-gray-900 p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center text-white md:justify-between">
          <div className="flex-column flex">
            <ClockIcon className="h-6 w-6 text-white" />
            <Typography color="white" className="mb-8 ml-2 font-normal">
              15:00
            </Typography>
          </div>
          <div className="flex-column flex">
            <CalendarIcon className="h-6 w-6 text-white" />
            <Typography color="white" className="mb-8 ml-2 font-normal">
              20 De Mayo
            </Typography>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Template2;
