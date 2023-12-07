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
export type GiLoveMysteryProps = typeof __propDef.props;
export type GiLoveMysteryEvents = typeof __propDef.events;
export type GiLoveMysterySlots = typeof __propDef.slots;
export default class GiLoveMystery extends SvelteComponentTyped<GiLoveMysteryProps, GiLoveMysteryEvents, GiLoveMysterySlots> {
}
export {};
