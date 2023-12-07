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
export type GiBrokenSkullProps = typeof __propDef.props;
export type GiBrokenSkullEvents = typeof __propDef.events;
export type GiBrokenSkullSlots = typeof __propDef.slots;
export default class GiBrokenSkull extends SvelteComponentTyped<GiBrokenSkullProps, GiBrokenSkullEvents, GiBrokenSkullSlots> {
}
export {};
