import { DelegationGraph, Governor } from "../src/types/delegationGraph";

export interface DelegateUpdate {
  userId: Governor["id"];
  delegateId: Governor["id"];
}

export interface RegisterVoter {
  userId: Governor["id"];
  name: Governor["name"];
}

export interface DBModel {
  _id: string;
  data: DelegationGraph;
}
