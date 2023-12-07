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
export type GiOrangeProps = typeof __propDef.props;
export type GiOrangeEvents = typeof __propDef.events;
export type GiOrangeSlots = typeof __propDef.slots;
export default class GiOrange extends SvelteComponentTyped<GiOrangeProps, GiOrangeEvents, GiOrangeSlots> {
}
export {};
