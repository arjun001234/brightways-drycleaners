// import React from "react";

import markerIcon from "../../../public/icons/logo.png";

// function MapComponent({
//     center,
//     zoom,
//     children
//   }: {
//     center: google.maps.LatLngLiteral;
//     zoom: number;
//     children: React.ReactNode
//   }) {
//     const ref = React.useRef<HTMLDivElement>(null);
//     const [map, setMap] = React.useState<google.maps.Map>();

//     React.useEffect(() => {
//       if (ref.current && !map) {
//         setMap(new window.google.maps.Map(ref.current, {center,zoom}));
//       }
//     }, [ref, map]);

//     return (
//         <>
//     <div ref={ref} className="w-full h-[400px]" />
//     {React.Children.map(children, (child) => {
//       if (React.isValidElement(child)) {
//         // set the map prop on the child component
//         return React.cloneElement(child, { map });
//       }
//     })}
//   </>
//     );
// }

// export default MapComponent

// interface MapProps extends google.maps.MapOptions {
//     style: { [key: string]: string }
// }

// const Map: React.FC<MapProps> = ({style}) => {
//   const ref = React.useRef<HTMLDivElement>(null);
//   const [map, setMap] = React.useState<google.maps.Map>();

//   React.useEffect(() => {
//     if (ref.current && !map) {
//       setMap(new window.google.maps.Map(ref.current, {}));
//     }
//   }, [ref, map]);

//   return <div ref={ref} style={style} />;
// };

// export default Map;

import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import {LoadScriptProps} from '@react-google-maps/api'
import { useLoaderData } from "@remix-run/react";
import { StorePageData } from "~/types/types";


type OfficeNode = {
  id: string;
  field_address: {
    locality: string;
    postal_code: string;
    address_line1: string;
    address_line2: string;
    latitude: number;
    longitude: number;
  };
};

export default function Map() {
  const offices = [
    {
      id: "1",
      field_address: {
        locality: "NIT 1",
        postal_code: "121001",
        address_line1:
          "1J, 16, Aryasamaj Rd, Block J, New Industrial Twp 1, New Industrial Twp, Faridabad, Haryana",
        address_line2: "",
        latitude: 28.387108274505763,
        longitude: 77.30340686719823,
      },
    },
    {
      id: "2",
      field_address: {
        locality: "Sector 21",
        postal_code: "121001",
        address_line1:
          "Shop no. 47,Sec 21A Market, Sector 21A, Faridabad, Haryana",
        address_line2: "",
        latitude: 28.422634416423737,
        longitude: 77.29688708219304,
      },
    },
  ];
  const mapRef = React.useRef<any>(null);
  const {mapApiKey} = useLoaderData<StorePageData>();
  const [selectedOffice, setSelectedOffice] = React.useState<
    OfficeNode | undefined | null
  >(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: mapApiKey || "",
  });
  const onLoad = React.useCallback(
    (mapInstance) => {
      const bounds = new google.maps.LatLngBounds();
      offices.forEach((office) => {
        bounds.extend(
          new google.maps.LatLng(
            office.field_address.latitude,
            office.field_address.longitude
          )
        );
      });
      mapRef.current = mapInstance;
      mapInstance.fitBounds(bounds);
    },
    [offices]
  );
  const onClickMarker = (officeId: string) => {
    setSelectedOffice(offices.find((office) => office.id === officeId));
  };

  return (
    <div className="h-[400px] w-full">
      {isLoaded  && (
        <>
          <GoogleMap
            mapContainerClassName="h-full w-full rounded-lg border-primary"
            onLoad={onLoad}
          >
            {offices.map((office) => (
              <Marker
                key={office.id}
                onClick={() => onClickMarker(office.id)}
                icon={markerIcon}
                position={{
                  lat: office.field_address.latitude,
                  lng: office.field_address.longitude,
                }}
              />
            ))}
            {selectedOffice && (
              <InfoWindow
                position={{
                  lat: selectedOffice.field_address.latitude,
                  lng: selectedOffice.field_address.longitude,
                }}
                onCloseClick={() => setSelectedOffice(null)}
              >
                <p>
                  {selectedOffice.field_address.address_line1}{" "}
                  {selectedOffice.field_address.address_line2} -{" "}
                  {selectedOffice.field_address.postal_code}{" "}
                  {selectedOffice.field_address.locality}
                </p>
              </InfoWindow>
            )}
          </GoogleMap>
        </>
      )}
    </div>
  );
}
