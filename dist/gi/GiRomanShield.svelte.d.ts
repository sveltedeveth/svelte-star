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
export type GiRomanShieldProps = typeof __propDef.props;
export type GiRomanShieldEvents = typeof __propDef.events;
export type GiRomanShieldSlots = typeof __propDef.slots;
export default class GiRomanShield extends SvelteComponentTyped<GiRomanShieldProps, GiRomanShieldEvents, GiRomanShieldSlots> {
}
export {};
