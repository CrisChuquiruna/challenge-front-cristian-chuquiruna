// src/types/vehicle.ts
export type VehicleWithId = Vehicle & { id: string }

export interface Vehicle {
  brand: number;
  name: string;
  name_details: string;
  code: string;
  vehicle_group: string;
  air_conditioner: boolean;
  transmission_type: string;
  vehicle_type: string;
  vehicle_class: string;
  fuel_type: string | null;
  drive_type: string | null;
  door_count: string | null;
  picture_url: {
    normal: string;
    featured: string;
  };
  stars: number;
  features: {
    doors: string;
    seats: string;
    air_conditioner: boolean;
    transmition: string;
    fuel_type: string;
    large_suitcase: number;
    small_suitcase: number;
    thumb: string;
    fleet_group_id: number;
    fleet_category_id: number;
    fleet_original_category_id: number;
    category: string;
  };
  tags: Tag[];
  rates: Record<string, Rate>;
}

export interface Tag {
  id: number;
  name_filter: string;
  visible: boolean;
  name: string;
  icon: string;
  color: string;
  remote_url: string | null;
  placeholder: string;
  priority: number;
}

export interface Rate {
  rate_data: {
    name: string;
    net_rate: boolean;
    rate_type: string;
    inclusions: {
      name: string[];
      description: string[];
    };
    step_one: boolean;
  };
  inclusions_meta: Record<string, Inclusion>;
  discount_numbers: any;
  pricing: Record<string, Pricing>;
  tags: Tag[];
  id: number;
}

export interface Inclusion {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Pricing {
  total_charge: {
    base: Charge;
    discounts: any;
    total: Charge;
  };
}

export interface Charge {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: {
    prepaid_amount: string;
    paid_on_destination_amount: string;
  };
  pd: {
    prepaid_amount: string;
    paid_on_destination_amount: string;
  };
}
