export default function Companyhistory() {
  return (
    <div className="container mx-auto my-24 px-6">
      <section className="mb-32 text-gray-600">
        <div className="container mx-auto text-center lg:text-left xl:px-32">
          <div className="flex grid items-center lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div className="bg-[hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px)]  block rounded-lg bg-history-bg px-6 py-12 shadow-lg backdrop-blur-xl md:px-12 lg:-mr-14 lg:py-6 xl:py-12">
                <p className="text-gra-500 mb-6">
                  A HYDROSYS Víz- és Környezetvédelmi Fejlesztõ Szolgáltató Kft.
                  1996-ban alakult. Alapító tagjai természetes személyek, akik a
                  Vízgazdálkodási Tudományos Kutató Intézetnél 20-30 éve
                  foglalkoztatott, a felszín alatti vizek területén dolgozó
                  elismert kutatók. Az alapítók végzettsége (geológus, vegyész,
                  vízrajzos szakember, üzemmérnök), és szakmai tapasztalata
                  alapján a társaság tevékenységi köre kiterjed a felszín alatti
                  vízgazdálkodásban felmerülõ elméleti és gyakorlati feladatok
                  széles körére:
                </p>

                <p className="text-gra-500 mb-6">
                  Az alapítás óta eltelt közel 16 esztendő alatt a társaság a
                  felsorolt valamennyi szakterületen rendelkezik referenciával.
                  A legnagyobb méretű és szakmailag is jelentős munkái a
                  sérülékeny vízbázisok biztonságba helyezése, szennyezett
                  területek kármentesítéséhez kapcsolódó hidraulikai és
                  transzport modellezések, szennyezőforrás felmérések,
                  hidrogeológiai hatásvizsgálatok, terepi mérések (hidraulikai,
                  vízkémiai), mintavételek, és ezekhez kapcsolódó kiértékelések
                  voltak. Jelenleg 4 főállású munkatársa van a társaságnak,
                  közülük hárman felsőfokú végzettséggel rendelkeznek. Egy
                  munkatárs mellékállásban tagja a Kft-nek. A cég székhelye,
                  egyben irodája Budapesten, a Mester utcában van.
                </p>
              </div>
            </div>

            <div>
              <img
                src="/szab.jpg"
                className="h-max w-full rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
