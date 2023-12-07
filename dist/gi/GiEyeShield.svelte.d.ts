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
export type GiEyeShieldProps = typeof __propDef.props;
export type GiEyeShieldEvents = typeof __propDef.events;
export type GiEyeShieldSlots = typeof __propDef.slots;
export default class GiEyeShield extends SvelteComponentTyped<GiEyeShieldProps, GiEyeShieldEvents, GiEyeShieldSlots> {
}
export {};
