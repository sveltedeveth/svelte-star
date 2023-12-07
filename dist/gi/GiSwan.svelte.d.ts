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
export type GiSwanProps = typeof __propDef.props;
export type GiSwanEvents = typeof __propDef.events;
export type GiSwanSlots = typeof __propDef.slots;
export default class GiSwan extends SvelteComponentTyped<GiSwanProps, GiSwanEvents, GiSwanSlots> {
}
export {};
