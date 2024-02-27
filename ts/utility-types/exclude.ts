

type TrafficLightStatusForVehicles = "rojo" | "amarillo" | "verde";
type TrafficLightStatusForPedestrians = Exclude<TrafficLightStatusForVehicles, "amarillo">;


type BaseUser = {
  id: number,
  username: string;
}

type Admin = BaseUser & {
  level: number;
  permission: number[];
}

type LoggedUser = BaseUser & {
  sessionId: number;
  loginTimestamp: number;
}
type Guest = BaseUser & {
  ip: string;
}

type AuthUser = Exclude<User, Guest>;

const emailUser = (user: AuthUser): void => {

}

type NoString<T> = Exclude<T, string>;


const getValue = <Type>(value: NoString<Type>): void => {

}

getValue([""])
getValue([""])

export default {};
