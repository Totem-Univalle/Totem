import { Avatar, Typography } from "@material-tailwind/react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Carrusel from "./Carrusel";
import { pics } from "./Data";

export function Template1() {
  return (
    <>
      <section className="relative block h-[50vh] bg-gray-900">
        <div className="bg-profile-background absolute top-0 h-full w-full ">
          <figure className="relative h-full w-full">
            <Carrusel className="carrusel" images={pics} />
            <figcaption className="absolute left-5 top-5 flex w-1/8  justify-items-center rounded-xl  bg-white/75 p-2 shadow-lg shadow-black/5 saturate-200">
              <p className="text-gray-700">15:05</p>
            </figcaption>
            <figcaption className="absolute right-5 top-5 flex w-1/8  justify-items-center rounded-xl  bg-white/75 p-2 shadow-lg shadow-black/5 saturate-200">
              <p className="text-gray-700">20 de Mayo</p>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="relative translate-y-12 bg-blue-gray-50/50 px-4 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-32">
                      <Avatar
                        src="/img/logo.png"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Plaza de Tiquipaya
                </Typography>
                <div className=" flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Cochabamba, Bolivia
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className=" flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </Typography>
                    <div className="mt-8">
                      <figure className="relative h-full w-full">
                        <img
                          className="h-full w-full rounded-xl"
                          src="https://img.freepik.com/vector-premium/navegacion-aplicacion-hay-destino-llegar-al-mapa-gps-destino_403715-36.jpg"
                          alt="nature image"
                        />
                        <figcaption className="absolute -top-12 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 px-6 py-4 shadow-lg shadow-black/5 saturate-200">
                          <div>
                            <Typography variant="h5" color="Light-Blue">
                              ¿Cómo puedo llegar?
                            </Typography>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Template1;
