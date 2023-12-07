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
export type GiFireShieldProps = typeof __propDef.props;
export type GiFireShieldEvents = typeof __propDef.events;
export type GiFireShieldSlots = typeof __propDef.slots;
export default class GiFireShield extends SvelteComponentTyped<GiFireShieldProps, GiFireShieldEvents, GiFireShieldSlots> {
}
export {};
