export interface ILevel {
  title: string;
  unlockLimit: number;
  unlockingRate: number;
  requiredToUpgrade: number;
  requiredToUpgradeAdditional: string;
}

export const levelsData: ILevel[] = [
  {
    title: "Level 1",
    unlockLimit: 500,
    unlockingRate: 0.00005,
    requiredToUpgrade: 0,
    requiredToUpgradeAdditional: "",
  },
  {
    title: "Level 2",
    unlockLimit: 1000,
    unlockingRate: 0.00005,
    requiredToUpgrade: 250,
    requiredToUpgradeAdditional: "Invite 1 Friend",
  },
  {
    title: "Level 3",
    unlockLimit: 2500,
    unlockingRate: 0.0025,
    requiredToUpgrade: 500,
    requiredToUpgradeAdditional: "Invite 3 Friends",
  },
  {
    title: "Level 4",
    unlockLimit: 5000,
    unlockingRate: 0.005,
    requiredToUpgrade: 1250,
    requiredToUpgradeAdditional: "Invite 4 Friends",
  },
  {
    title: "Level 5",
    unlockLimit: 25000,
    unlockingRate: 0.01,
    requiredToUpgrade: 2500,
    requiredToUpgradeAdditional: "Invite 7 Friends",
  },
  {
    title: "Level 6",
    unlockLimit: 100000,
    unlockingRate: 0.025,
    requiredToUpgrade: 12500,
    requiredToUpgradeAdditional: "Hold a Tier 2 NFT",
  },
];
