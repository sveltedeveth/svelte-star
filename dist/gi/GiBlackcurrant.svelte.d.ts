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
export type GiBlackcurrantProps = typeof __propDef.props;
export type GiBlackcurrantEvents = typeof __propDef.events;
export type GiBlackcurrantSlots = typeof __propDef.slots;
export default class GiBlackcurrant extends SvelteComponentTyped<GiBlackcurrantProps, GiBlackcurrantEvents, GiBlackcurrantSlots> {
}
export {};
