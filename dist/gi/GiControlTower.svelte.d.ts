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
export type GiControlTowerProps = typeof __propDef.props;
export type GiControlTowerEvents = typeof __propDef.events;
export type GiControlTowerSlots = typeof __propDef.slots;
export default class GiControlTower extends SvelteComponentTyped<GiControlTowerProps, GiControlTowerEvents, GiControlTowerSlots> {
}
export {};
