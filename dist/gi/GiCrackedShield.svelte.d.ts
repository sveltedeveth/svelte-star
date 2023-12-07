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
export type GiCrackedShieldProps = typeof __propDef.props;
export type GiCrackedShieldEvents = typeof __propDef.events;
export type GiCrackedShieldSlots = typeof __propDef.slots;
export default class GiCrackedShield extends SvelteComponentTyped<GiCrackedShieldProps, GiCrackedShieldEvents, GiCrackedShieldSlots> {
}
export {};
