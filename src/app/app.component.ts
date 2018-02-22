import { Component, OnInit } from '@angular/core';
import { TREE_MOCK_DATA } from './app.data';
import {
  FONT_AWESOME_ICONS,
  IconPackage
} from './app.constants';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-tree-layout',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  public name = 'Tree Layout';
  public nodeList: Node[] = [];

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.transformData();
  }

  private getRootNode(): Node {
    const rootNode: Node = {
      parent: '',
      name: TREE_MOCK_DATA[0].name,
      marginLeft: '2px',
      width: '100%',
      status: 1,
      icon: true,
      id: [0],
      hidden: false,
      ext: TREE_MOCK_DATA[0].type
    };

    return rootNode;
  }

  private transformData() {
    this.nodeList = [
      ...this.nodeList,
      this.getRootNode()
    ];
    this.getChildren(TREE_MOCK_DATA[0], 1, [0]);
  }

  private getChildren(node: any, depth: number, id: number[]): void {
    const childObjs = node['children'];

    childObjs.forEach((childObj: any, index: number) => {
      const uid = [...id, index];
      const iconReq = (childObj['children'] && childObj['children'].length > 0) ? true : false;

      this.nodeList = [
        ...this.nodeList,
        {
          parent: node.name,
          name: childObj.name,
          marginLeft: (depth * 24) + 'px',
          width: ('calc(100% - ' + ((depth * 24) - 2 ) + 'px'),
          status: 1,
          icon: iconReq,
          id: uid,
          hidden: false,
          ext: childObj.type
        }
      ];

      this.getChildren(childObj, depth + 1, uid);
    });
  }

  public onClick(dataObj: Node) {
    if (dataObj.icon) {
      const copiedNodeArray = [...this.nodeList];
      const index = this.nodeList.indexOf(dataObj);
      this.nodeList = [
        ...copiedNodeArray.slice(0, index),
        Object.assign({}, dataObj, {
          status: dataObj.status === 0 ? 1 : 0
        }),
        ...copiedNodeArray.slice(index + 1),
      ];

      if (dataObj.status === 0) {
        this.logEvent('Expanded ' + dataObj.name);
        this.showChildren(dataObj);
      } else {
        this.logEvent('Collapsed ' + dataObj.name);
        this.hideChildren(dataObj);
      }
    } else {
      this.logEvent('Clicked ' + dataObj.name);
    }
  }

  private hideChildren(dataObj: Node) {
    this.nodeList.forEach((nodeItem) => {
      if (nodeItem.id.length === dataObj.id.length + 1) {
        if (this.checkArrayEquality(dataObj.id, nodeItem.id)) {
          nodeItem.hidden = true;
          this.hideChildren(nodeItem);
        }
      }
    });
  }

  private showChildren(dataObj) {
    this.nodeList.forEach((nodeItem) => {
      if (nodeItem.id.length === dataObj.id.length + 1) {
        if (this.checkArrayEquality(dataObj.id, nodeItem.id)) {
          nodeItem.hidden = false;
          if (nodeItem.status === 1) {
            this.showChildren(nodeItem);
          }
        }
      }
    });
  }

  private checkArrayEquality(a: number[], b: number[]): boolean {
    let equalityStatus = true;
    const ub = b.slice(0, b.length - 1);

    a.forEach((item: number, index: number) => {
      equalityStatus = equalityStatus && (item === ub[index]);
    });

    return equalityStatus;
  }

  public getIcon(ext: string): string {
    let icon: string;
    for (let i = 0; i < FONT_AWESOME_ICONS.length; i++) {
      const iconPackage: IconPackage = FONT_AWESOME_ICONS[i];
      for (let j = 0; j < iconPackage.formats.length; j++) {
        if (iconPackage.formats[j] === ext) {
          icon = iconPackage.icon;
          break;
        }
      }

      if (icon) {
        break;
      }
    }
    return icon;
  }

  private logEvent(msg: string): void {
    this.snackbar.open(msg, '', {
      duration: 3000
    });
  }
}

export interface Node {
  parent: string;
  name: string;
  marginLeft: string;
  width: string;
  status: number;
  icon: boolean;
  id: number[];
  hidden: boolean;
  ext: string;
}
