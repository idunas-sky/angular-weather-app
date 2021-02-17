export interface Alerts {
  features: Alert[];
}

export interface Alert {
  id: string;
  properties: AlertProperties;
}

export interface AlertProperties {
  areaDesc: string;
  effective: Date;
  expires: Date;
  ends: Date;
  status: string;
  severity: string;
  certainty: string;
  urgency: string;
  senderName: string;
  headline: string;
  description: string;
  instruction: string;
  event: string;
}
