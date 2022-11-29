import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { COLORS } from '../../hooks/constants';
import { randomIntFromInterval } from '../../utils/utils';
import { REGIONS } from '../../constants';
export default class Player {

  id: string;
  name: string;
  hometown: [
    string,
    REGIONS,
  ];
  lastDestination: [
    string,
    REGIONS,
  ];
  currentDestination: [
    string,
    REGIONS,
  ];
  color: {
    value: string,
    name: string,
    id: number,
  };

  constructor() {
    this.id = uuidv4();
    this.name = '';
    this.hometown = null;
    this.lastDestination = null;
    this.currentDestination = null;
    this.color = COLORS[randomIntFromInterval(0, 5)];
  }

  public changeName(value): void {
    this.name = value;
  }
  public changeHometown(value): void {
    this.hometown = value;
  }
  public changeLastDestination(value): void {
    this.lastDestination = value;
  }
  public changeCurrentDestination(value): void {
    this.currentDestination = value;
  }
  public changeColor(): void {
    this.color = this.switchNewColor()
  }

  private switchNewColor() {
    let colorId = this.color.id + 1;
    if (colorId > COLORS.length) {
      colorId = 1;
    }
    return COLORS[colorId - 1];
  }
}