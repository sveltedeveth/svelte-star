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
export type GiHoodProps = typeof __propDef.props;
export type GiHoodEvents = typeof __propDef.events;
export type GiHoodSlots = typeof __propDef.slots;
export default class GiHood extends SvelteComponentTyped<GiHoodProps, GiHoodEvents, GiHoodSlots> {
}
export {};
