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
export type GiCavalryProps = typeof __propDef.props;
export type GiCavalryEvents = typeof __propDef.events;
export type GiCavalrySlots = typeof __propDef.slots;
export default class GiCavalry extends SvelteComponentTyped<GiCavalryProps, GiCavalryEvents, GiCavalrySlots> {
}
export {};
