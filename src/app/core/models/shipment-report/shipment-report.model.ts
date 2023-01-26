export interface ShipmentReport {
    shippingReport: ShippingReport[];
    status: number;
    description: string;
}

export interface ShippingReport {
    trackingNumber: string;
    city: string;
    customer: string;
    address: string;
    phoneNumber: string;
    unit: number;
    actualWeight: number;
    weightVolume: number;
    shipping: string;
    observation: string;
    declaredValue: number;
}
