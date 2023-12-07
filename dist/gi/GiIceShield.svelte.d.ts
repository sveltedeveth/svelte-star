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
export type GiIceShieldProps = typeof __propDef.props;
export type GiIceShieldEvents = typeof __propDef.events;
export type GiIceShieldSlots = typeof __propDef.slots;
export default class GiIceShield extends SvelteComponentTyped<GiIceShieldProps, GiIceShieldEvents, GiIceShieldSlots> {
}
export {};
