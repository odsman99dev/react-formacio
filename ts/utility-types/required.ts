interface TemporalBooking {
  id: number;
  destiantion: string;
  people?: string;
  price?: string;
}


type Booking = Required<TemporalBooking>;


declare const finalBooking: (booking: Booking) => void;
