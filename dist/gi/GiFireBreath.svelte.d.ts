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
export type GiFireBreathProps = typeof __propDef.props;
export type GiFireBreathEvents = typeof __propDef.events;
export type GiFireBreathSlots = typeof __propDef.slots;
export default class GiFireBreath extends SvelteComponentTyped<GiFireBreathProps, GiFireBreathEvents, GiFireBreathSlots> {
}
export {};
