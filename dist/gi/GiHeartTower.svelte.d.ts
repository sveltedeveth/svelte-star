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
export type GiHeartTowerProps = typeof __propDef.props;
export type GiHeartTowerEvents = typeof __propDef.events;
export type GiHeartTowerSlots = typeof __propDef.slots;
export default class GiHeartTower extends SvelteComponentTyped<GiHeartTowerProps, GiHeartTowerEvents, GiHeartTowerSlots> {
}
export {};
