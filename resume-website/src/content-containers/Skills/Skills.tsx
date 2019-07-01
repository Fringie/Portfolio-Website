import * as React from "react";
import "./Skills.scss";
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { isNullOrUndefined } from "util";
import { Rating, RatingSize } from 'office-ui-fabric-react/lib/Rating';

export interface ISkillsProps {
    
}

export interface ISkillsState {
    showPanel: boolean;
    items: ISkillsListItem[];
}

export interface ISkillsListItem {
    key: number;
    name: string;
    value: number;
}

export default class Skills extends React.Component<ISkillsProps, ISkillsState> {
    private _allItems: ISkillsListItem[];
    private _columns: IColumn[];


    public constructor(props: ISkillsProps) {
        super(props);
        this._allItems = this.createListContent();
        this._columns = [
            { key: 'NameCol', name: 'Name', fieldName: 'name', minWidth: 50, maxWidth: 200, isResizable: true },
            { key: 'RatingCol', name: 'Rating', fieldName: 'value', minWidth: 50, maxWidth: 200, isResizable: true }
        ];
        this.state = {
            showPanel: false,
            items: this._allItems
        };
    }

    render(): JSX.Element {
        const { items } = this.state;
        return (
            <div className="hero skills skills">
                <div className="trans-btn" onClick={this._showPanel}>
                    <a onClick={this._showPanel}>
                        Tech Stack
                    </a>
                    <Panel
                    isOpen={this.state.showPanel}
                    type={PanelType.medium}
                    onDismiss={this._hidePanel}
                    headerText="Tech Stack"
                    isLightDismiss={true}
                    closeButtonAriaLabel="Close"
                    >
                        <Fabric>
                            <p>
                                Relative to mid level ability.
                            </p>
                            <TextField
                            label="Filter by name:"
                            onChange={this._onFilter}
                            styles={{ root: { maxWidth: '100%' } }}
                            />
                            <DetailsList
                            items={items}
                            columns={this._columns}
                            layoutMode={DetailsListLayoutMode.fixedColumns}
                            selectionPreservedOnEmptyClick={true}
                            onRenderItemColumn={this._renderItemColumn}
                            />
                        </Fabric>
                    </Panel>
                </div>
            </div>
        )
    }

    private _showPanel = () => {
        this.setState({ showPanel: true });
    };
    
    private _hidePanel = () => {
       this.setState({ showPanel: false });
    };

    private _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text?: string): void => {
        this.setState({
            items: text ? this._allItems.filter(i => i.name.toLowerCase().indexOf(text) > -1) : this._allItems
        });
    };

    /**
     * Build skills list data
     */
    private createListContent(){
        let content: ISkillsListItem[] = [];
        let i = 0;
        content.push({
            key: i++,
            name: "SharePoint Online",
            value: 4
        });
        content.push({
            key: i++,
            name: "SharePoint 2013",
            value: 3
        });
        content.push({
            key: i++,
            name: "Office 365 Admin",
            value: 4
        });
        content.push({
            key: i++,
            name: "SharePoint 2016",
            value: 3
        });
        content.push({
            key: i++,
            name: "C#",
            value: 3
        });
        content.push({
            key: i++,
            name: ".NET",
            value: 2
        });
        content.push({
            key: i++,
            name: "HTML5",
            value: 4
        });
        content.push({
            key: i++,
            name: "CSS",
            value: 4
        });
        content.push({
            key: i++,
            name: "Bootstrap",
            value: 4
        });
        content.push({
            key: i++,
            name: "CSOM",
            value: 4
        });
        content.push({
            key: i++,
            name: "JavaScript",
            value: 4
        });
        content.push({
            key: i++,
            name: "jQuery",
            value: 4
        });
        content.push({
            key: i++,
            name: "React.js",
            value: 3
        });
        content.push({
            key: i++,
            name: "SASS (.scss)",
            value: 3
        });
        content.push({
            key: i++,
            name: "Node.js",
            value: 3
        });
        content.push({
            key: i++,
            name: "PHP",
            value: 1
        });
        content.push({
            key: i++,
            name: "JSOM",
            value: 5
        });
        content.push({
            key: i++,
            name: "PowerShell",
            value: 4
        });
        content.push({
            key: i++,
            name: "T-SQL",
            value: 2
        });
        content.push({
            key: i++,
            name: "JSON",
            value: 5
        });
        content.push({
            key: i++,
            name: "TypeScript",
            value: 3
        });
        content.push({
            key: i++,
            name: "REST",
            value: 3
        });
        content.push({
            key: i++,
            name: "Fabric UI Office",
            value: 3
        });
        content.push({
            key: i++,
            name: "FabricUI.js",
            value: 3
        });
        content.push({
            key: i++,
            name: "Windows Forms",
            value: 4
        });
        content.push({
            key: i++,
            name: "WPF",
            value: 2
        });
        content.push({
            key: i++,
            name: "ASP.NET",
            value: 2
        });
        content.push({
            key: i++,
            name: "Microsoft Flow",
            value: 3
        });
        content.push({
            key: i++,
            name: "PowerApps",
            value: 2
        });
        content.push({
            key: i++,
            name: "Windows Server",
            value: 3
        });
        content.push({
            key: i++,
            name: "Computer Hardware",
            value: 5
        });
        content.sort(this.compare)
        return content;
    }

    private compare( a: ISkillsListItem, b: ISkillsListItem ) {
        if ( a.name < b.name ){
          return -1;
        }
        if ( a.name > b.name ){
          return 1;
        }
        return 0;
      }

    /**
     * Render custom list item column
     * @param item The list item data
     * @param index index of current item
     * @param column Column information
     */
    private _renderItemColumn(item?: ISkillsListItem, index?: number, column?: IColumn) {
        if(!isNullOrUndefined(item) && !isNullOrUndefined(column)) {
            const fieldContent = item[column.fieldName as keyof ISkillsListItem] as string;
            
            switch (column.key) {
              case 'RatingCol':
                  let rating = <Rating
                    min={1}
                    max={5}
                    size={RatingSize.Small}
                    rating={item.value}
                    readOnly={true}
                />;
                  return rating;
              default:
                let style = {
                    lineHeight: "32px"
                }
                return <span style={style}>{fieldContent}</span>;
            }
        }
    }

}
