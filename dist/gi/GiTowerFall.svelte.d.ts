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
export type GiTowerFallProps = typeof __propDef.props;
export type GiTowerFallEvents = typeof __propDef.events;
export type GiTowerFallSlots = typeof __propDef.slots;
export default class GiTowerFall extends SvelteComponentTyped<GiTowerFallProps, GiTowerFallEvents, GiTowerFallSlots> {
}
export {};
