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
export type GiEdgedShieldProps = typeof __propDef.props;
export type GiEdgedShieldEvents = typeof __propDef.events;
export type GiEdgedShieldSlots = typeof __propDef.slots;
export default class GiEdgedShield extends SvelteComponentTyped<GiEdgedShieldProps, GiEdgedShieldEvents, GiEdgedShieldSlots> {
}
export {};
