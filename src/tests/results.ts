import * as faker from "faker";

export interface BaseDetails {
  id: number;
  createdAt: Date;
}

const statuses = ["WORKING", "AWAY", "UNKNOWN"] as const;
type status = typeof statuses[number];

export interface Employee extends BaseDetails {
  firstName: string;
  lastName: string;
  email?: string;
  organization: Organization;
  active: boolean;
  status: status;
}

export interface Organization extends BaseDetails {
  name: string;
  employees: Employee[];
}

export const generateEmployee = (organizationId: number) => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  organization: organizationId,
  active: faker.datatype.boolean(),
  status: faker.random.arrayElement(statuses)
});
