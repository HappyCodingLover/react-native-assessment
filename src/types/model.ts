export type BaseType = {
  id: string;
  createdAt: Date | number | null;
  updatedAt: Date | number | null;
};
export type Airplane = BaseType & {
  makeModel: string | null;
  tailNumber: string | null;
  types: Array<AirplaneType>;
  userID: string | null;
};

export type AirplaneType = BaseType & {
  type: string | null;
  isSelected: Boolean;
  isCustom: Boolean;
};

export type AirplaneTypeTotals = {
  type: string;
  hours: string;
};

export type Airport = {
  continent: string;
  coordinates: string;
  elevationFt: string;
  gpsCode: string;
  iataCode: string;
  ident: string;
  isoCountry: string;
  isoRegion: string;
  localCode: string;
  municipality: string;
  name: string;
  type: string;
};

export type Leg = {
  name: string | null;
  lat?: number | null;
  lng?: number | null;
};

export type Approach = BaseType & {
  type: string | null;
  runway: string | null;
  airport: string | null;
  order: Number;
};

export type Certificate = BaseType & {
  type: string | null;
  date: string | null;
  courseDate?: string | null;
  number: string | null;
  ratings: Array<Rating>;
  isMedical: Boolean;
  userID: string;
  classes?: Array<string>;
  category?: string;
};

export type Customer = BaseType & {
  membershipType: string | null;
  renewDate: string | null;
  startDate: string | null;
  source: string | null;
  status: string | null;
};

export type CustomExport = BaseType & {
  startDate: Date | null;
  endDate: Date | null;
  excludedColumns: Array<string>;
  exportUrl: string | null;
  fileType: string | null;
  summaryIncluded: Boolean;
  profilePictureIncluded: Boolean;
};

export type EndorsementTemplate = BaseType & {
  title: string | null;
  type: string | null;
  text: string | null;
};

export type Endorsement = BaseType & {
  title: string | null;
  type: string | null;
  text: string | null;
  key: string;
  userID: string | null;
  signature: string | null;
  cfi: string | null;
  expDate: string | null;
};

export type EndorsementType = BaseType & {
  group: string | null;
  order: Number;
  isCollapsed: Boolean;
  key: string | null;
};

export type FlightLog = BaseType & {
  ownerId: string | null;
  legs: Array<Leg>;
  times: Array<FlightTime>;
  date: string | null;
  dateInMS: string | null;
  airplaneID: string | null;
  airplane: Airplane;
  dayLandings: string | null;
  nightLandings: string | null;
  approaches: Approach;
  remarks: Remarks;
  simulator: Boolean;
  holds: Array<String>;
  attachment: string | null;
  userID: string | null;
};

export type FlightTime = {
  type: string | null;
  hours: string;
  isCustom?: Boolean;
};

export type MakeModel = BaseType & {
  makeModel: string | null;
  hours: string | null;
};

export type NotificationType = BaseType & {
  notificationID: string | null;
  senderID: string | null;
  recipientID: string | null;
  sender: User;
  recipient: User;
  isNew: boolean;
};

export type PreviousTotals = BaseType & {
  times: Array<FlightTime>;
  types: Array<AirplaneTypeTotals>;
  nightLandings: string;
  dayLandings: string;
  approachNumber: string;
  totalHours: string;
  userID: string | null;
};

export type Rating = {
  type: string | null;
  isDefault?: Boolean;
  isSelected: Boolean;
};

export type Referral = BaseType & {
  senderID: string | null;
  recipientID: string | null;
  purchased: Boolean | null;
};

export type Remarks = BaseType & {
  remark: string | null;
  cfiNumber: string | null;
  expirationDate: string | null;
  signature: string | null;
};

export type RunningTotals = BaseType & {
  times: Array<FlightTime>;
  types: Array<AirplaneTypeTotals>;
  makeModel: Array<MakeModel>;
  nightLandings: string | null;
  dayLandings: string | null;
  approachNumber: string | null;
  totalHours: string;
};

export type SupportLog = BaseType & {
  userID: String | null;
  userName: String | null;
  userEmail: String | null;
  userPhone: String | null;
  userDescription: String | null;
  reason: String | null;
  status: String | null;
  contactMethod: String | null;
};

export type User = BaseType & {
  createdAt: Date | number | null;
  updatedAt: Date | number | null;
  userID: string;
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  pilotGoals: Array<string>;
  gender: string;
  phone: string;
  thumbnail: string;
  dob: string;
  leadChannel: string;
  fcmToken: string;
  timeTypes: Array<TimeType>;
};

export type TimeType = {
  type: string;
  enabled: boolean;
};

export type TimeTypes = TimeType[];

export type EngagementEvent = BaseType & {
  actioned: boolean;
  dismissed: boolean;
  type: 'modal' | 'push';
  eventID: string;
  title: string;
  message: string;
  url: string;
  image: string;
  button: string;
};

export type SubscriptionValidator = BaseType & {
  membershipType: string;
  renewDate: string;
  startDate: string;
  source: string;
  status: string;
};

export type Status = 'idle' | 'pending' | 'resolved' | 'rejected';

export type OmitBase<T> = Omit<T, keyof BaseType>;
export type OmitBaseUid<T> = Omit<T, keyof BaseType | 'userID'>;
export type OmitBaseUidUpdate<T> = Omit<T, keyof BaseType | 'userID'> & {
  id: string;
};

export type SelectOption = {
  label: string;
  value: string;
};
