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
export type GiEvilTowerProps = typeof __propDef.props;
export type GiEvilTowerEvents = typeof __propDef.events;
export type GiEvilTowerSlots = typeof __propDef.slots;
export default class GiEvilTower extends SvelteComponentTyped<GiEvilTowerProps, GiEvilTowerEvents, GiEvilTowerSlots> {
}
export {};
