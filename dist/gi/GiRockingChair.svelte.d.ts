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
export type GiRockingChairProps = typeof __propDef.props;
export type GiRockingChairEvents = typeof __propDef.events;
export type GiRockingChairSlots = typeof __propDef.slots;
export default class GiRockingChair extends SvelteComponentTyped<GiRockingChairProps, GiRockingChairEvents, GiRockingChairSlots> {
}
export {};
