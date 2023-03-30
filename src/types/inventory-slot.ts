export interface ItemData {
  label: string;
  image: string;
  name: string;
  // ! all fields beyond this point should be optional so legacy presets are not broken
  breakdownNotes?: string;
  selected?: boolean;
  alternateItems?: ItemData[];
}

export type ItemDataArray = ItemData[] | null;
