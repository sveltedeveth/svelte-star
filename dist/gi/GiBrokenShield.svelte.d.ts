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
export type GiBrokenShieldProps = typeof __propDef.props;
export type GiBrokenShieldEvents = typeof __propDef.events;
export type GiBrokenShieldSlots = typeof __propDef.slots;
export default class GiBrokenShield extends SvelteComponentTyped<GiBrokenShieldProps, GiBrokenShieldEvents, GiBrokenShieldSlots> {
}
export {};
