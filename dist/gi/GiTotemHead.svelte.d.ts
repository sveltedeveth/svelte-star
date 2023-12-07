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
export type GiTotemHeadProps = typeof __propDef.props;
export type GiTotemHeadEvents = typeof __propDef.events;
export type GiTotemHeadSlots = typeof __propDef.slots;
export default class GiTotemHead extends SvelteComponentTyped<GiTotemHeadProps, GiTotemHeadEvents, GiTotemHeadSlots> {
}
export {};
