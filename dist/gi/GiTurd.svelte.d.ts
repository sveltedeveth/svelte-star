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
export type GiTurdProps = typeof __propDef.props;
export type GiTurdEvents = typeof __propDef.events;
export type GiTurdSlots = typeof __propDef.slots;
export default class GiTurd extends SvelteComponentTyped<GiTurdProps, GiTurdEvents, GiTurdSlots> {
}
export {};
