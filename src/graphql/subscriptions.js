/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIotCatalogs = /* GraphQL */ `
  subscription OnCreateIotCatalogs(
    $serialNumber: String
    $unixTimeStamp: String
    $deviceMos: Float
    $deviceTemp: Float
    $deviceLat: Float
  ) {
    onCreateIotCatalogs(
      serialNumber: $serialNumber
      unixTimeStamp: $unixTimeStamp
      deviceMos: $deviceMos
      deviceTemp: $deviceTemp
      deviceLat: $deviceLat
    ) {
      serialNumber
      unixTimeStamp
      deviceMos
      deviceTemp
      deviceLat
      deviceLon
    }
  }
`;
export const onUpdateIotCatalogs = /* GraphQL */ `
  subscription OnUpdateIotCatalogs(
    $serialNumber: String
    $unixTimeStamp: String
    $deviceMos: Float
    $deviceTemp: Float
    $deviceLat: Float
  ) {
    onUpdateIotCatalogs(
      serialNumber: $serialNumber
      unixTimeStamp: $unixTimeStamp
      deviceMos: $deviceMos
      deviceTemp: $deviceTemp
      deviceLat: $deviceLat
    ) {
      serialNumber
      unixTimeStamp
      deviceMos
      deviceTemp
      deviceLat
      deviceLon
    }
  }
`;
export const onDeleteIotCatalogs = /* GraphQL */ `
  subscription OnDeleteIotCatalogs(
    $serialNumber: String
    $unixTimeStamp: String
    $deviceMos: Float
    $deviceTemp: Float
    $deviceLat: Float
  ) {
    onDeleteIotCatalogs(
      serialNumber: $serialNumber
      unixTimeStamp: $unixTimeStamp
      deviceMos: $deviceMos
      deviceTemp: $deviceTemp
      deviceLat: $deviceLat
    ) {
      serialNumber
      unixTimeStamp
      deviceMos
      deviceTemp
      deviceLat
      deviceLon
    }
  }
`;
