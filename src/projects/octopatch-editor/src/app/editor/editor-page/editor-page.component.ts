import { NodeConfiguration } from "./../../nodes/models/node-configuration";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { jsPlumb, jsPlumbInstance } from "jsplumb";

@Component({
  selector: "app-editor-page",
  templateUrl: "./editor-page.component.html",
  styleUrls: ["./editor-page.component.scss"],
})
export class EditorPageComponent implements OnInit, AfterViewInit {
  private jsPlumbInstance: jsPlumbInstance;

  public nodeConfigurations: Array<NodeConfiguration>;
  public selectedNode: NodeConfiguration;

  constructor() {
    this.nodeConfigurations = [
      {
        id: "node1",
        name: "Node 1",
        inputs: [{ id: "node1_input1", name: "Input 1" }],
        outputs: [
          { id: "node1_output1", name: "Output 1" },
          { id: "node1_output2", name: "Output 2" },
          { id: "node1_output3", name: "Output 3" },
        ],
        position: { top: 250, left: 150 },
      },
      {
        id: "node2",
        name: "Node 2",
        inputs: [
          { id: "node2_input1", name: "Input 1" },
          { id: "node2_input2", name: "Input 2" },
        ],
        outputs: [{ id: "node2_output1", name: "Output 1" }],
        position: { top: 450, left: 550 },
      },
    ];
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.jsPlumbInstance = jsPlumb.getInstance({
      DragOptions: {
        containment: "op-editor-page",
      },
    });
    this.initNodes();
  }

  public selectNode(nodeId: string): void {
    this.selectedNode = this.nodeConfigurations.find((x) => x.id === nodeId);
  }

  private initNodes(): void {
    this.jsPlumbInstance.setContainer("op-editor-page");
    for (const node of this.nodeConfigurations) {
      this.jsPlumbInstance.draggable(node.id);
      for (const input of node.inputs) {
        this.jsPlumbInstance.addEndpoint(input.id, {
          isTarget: true,
          isSource: false,
          maxConnections: 1,
          anchor: [0, 0, 0, 0, 20, 20],
          connectorClass: "connector",
          endpoint: ["Dot", { radius: 8, cssClass: "startpoint" }],
          paintStyle: { strokeWidth: 4, stroke: "white" },
        });
      }
      for (const output of node.outputs) {
        this.jsPlumbInstance.addEndpoint(output.id, {
          isTarget: false,
          isSource: true,
          maxConnections: 1,
          anchor: [1, 0, 0, 0, -20, 20],
          connectorClass: "connector",
          endpoint: [
            "Dot",
            { radius: 8, hoverClass: "endpointHover", cssClass: "endpoint" },
          ],
          paintStyle: { strokeWidth: 4, stroke: "white" },
        });
      }
      this.jsPlumbInstance.repaintEverything();
    }
  }
}
