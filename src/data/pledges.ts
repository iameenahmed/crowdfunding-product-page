interface PledgeItem {
  id: number;
  title: string;
  amount: number;
  detail: string;
  lefts: number;
}

const pledges: PledgeItem[] = [
  {
    id: 1,
    title: "Bamboo Stand",
    amount: 25,
    detail:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    lefts: 101,
  },
  {
    id: 2,
    title: " Black Edition Stand",
    amount: 75,
    detail:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    lefts: 64,
  },
  {
    id: 3,
    title: "Mahogany Special Edition",
    amount: 200,
    detail:
      " You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    lefts: 0,
  },
];

export default pledges;
