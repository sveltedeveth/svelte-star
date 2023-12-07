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
export type GiVibratingShieldProps = typeof __propDef.props;
export type GiVibratingShieldEvents = typeof __propDef.events;
export type GiVibratingShieldSlots = typeof __propDef.slots;
export default class GiVibratingShield extends SvelteComponentTyped<GiVibratingShieldProps, GiVibratingShieldEvents, GiVibratingShieldSlots> {
}
export {};
