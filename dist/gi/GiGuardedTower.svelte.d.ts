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
export type GiGuardedTowerProps = typeof __propDef.props;
export type GiGuardedTowerEvents = typeof __propDef.events;
export type GiGuardedTowerSlots = typeof __propDef.slots;
export default class GiGuardedTower extends SvelteComponentTyped<GiGuardedTowerProps, GiGuardedTowerEvents, GiGuardedTowerSlots> {
}
export {};
