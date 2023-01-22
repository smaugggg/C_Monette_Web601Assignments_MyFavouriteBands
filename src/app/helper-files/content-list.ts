import { Content } from './content-interface';

export class ContentList {
  private _items: Content[];

  // initially sets the array to be empty
  constructor() {
    this._items = [];
  }

  // a getter function that returns the content array
  get items(): Content[] {
    return this._items;
  }

  // an add function to add one item to the array
  addItem(oneItem: Content) {
    this._items.push(oneItem);
  }

  // a function to return the number of items in the array
  getLength(): number {
    return this._items.length;
  }

  // a function that takes the array and turns it into a pretty html output
  returnHTML(index: number) {
    if(index < 0 || index >= this._items.length) {
      console.log("Invalid")
    }

    return `<div class="contentCard">
                <h1>${this._items[index].title}</h1>
                <h4>${this._items[index].creator}</h4>
                <img src="${this._items[index].imgURL}"  alt=""/>
                <p>${this._items[index].description}</p>
                <h5>${this._items[index].type}</h5>
            </div>`;
  }
}
