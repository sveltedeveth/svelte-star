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
export type GiBadBreathProps = typeof __propDef.props;
export type GiBadBreathEvents = typeof __propDef.events;
export type GiBadBreathSlots = typeof __propDef.slots;
export default class GiBadBreath extends SvelteComponentTyped<GiBadBreathProps, GiBadBreathEvents, GiBadBreathSlots> {
}
export {};
