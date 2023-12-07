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
export type GiTowerFlagProps = typeof __propDef.props;
export type GiTowerFlagEvents = typeof __propDef.events;
export type GiTowerFlagSlots = typeof __propDef.slots;
export default class GiTowerFlag extends SvelteComponentTyped<GiTowerFlagProps, GiTowerFlagEvents, GiTowerFlagSlots> {
}
export {};
