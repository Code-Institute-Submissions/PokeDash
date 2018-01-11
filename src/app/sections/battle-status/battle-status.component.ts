import { Component, OnInit } from "@angular/core";
import { Battle } from "../../components/shared/battle";

const SAMPLE_BATTLES = [
  { id: 1, name: "Pokemon 1", fighting: "Pokemon 2", isActive: 1 },
  { id: 2, name: "Pokemon 3", fighting: "Pokemon 4", isActive: null },
  { id: 3, name: "Pokemon 5", fighting: "Pokemon 6", isActive: 1 },
  { id: 4, name: "Pokemon 7", fighting: "Pokemon 8", isActive: null }
];
@Component({
  selector: "app-battle-status",
  templateUrl: "./battle-status.component.html",
  styleUrls: ["./battle-status.component.css"]
})
export class BattleStatusComponent implements OnInit {
  constructor() {}

  battles: Battle[] = SAMPLE_BATTLES;

  ngOnInit() {}
}
