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
export type GiRadioTowerProps = typeof __propDef.props;
export type GiRadioTowerEvents = typeof __propDef.events;
export type GiRadioTowerSlots = typeof __propDef.slots;
export default class GiRadioTower extends SvelteComponentTyped<GiRadioTowerProps, GiRadioTowerEvents, GiRadioTowerSlots> {
}
export {};
