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
export type GiBoltShieldProps = typeof __propDef.props;
export type GiBoltShieldEvents = typeof __propDef.events;
export type GiBoltShieldSlots = typeof __propDef.slots;
export default class GiBoltShield extends SvelteComponentTyped<GiBoltShieldProps, GiBoltShieldEvents, GiBoltShieldSlots> {
}
export {};
