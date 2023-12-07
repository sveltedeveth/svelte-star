import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GoRadioTowerProps = typeof __propDef.props;
export type GoRadioTowerEvents = typeof __propDef.events;
export type GoRadioTowerSlots = typeof __propDef.slots;
export default class GoRadioTower extends SvelteComponentTyped<GoRadioTowerProps, GoRadioTowerEvents, GoRadioTowerSlots> {
}
export {};
