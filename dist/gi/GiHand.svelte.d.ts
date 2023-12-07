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
export type GiHandProps = typeof __propDef.props;
export type GiHandEvents = typeof __propDef.events;
export type GiHandSlots = typeof __propDef.slots;
export default class GiHand extends SvelteComponentTyped<GiHandProps, GiHandEvents, GiHandSlots> {
}
export {};
