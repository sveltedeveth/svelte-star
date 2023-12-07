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
export type GiBurningDotProps = typeof __propDef.props;
export type GiBurningDotEvents = typeof __propDef.events;
export type GiBurningDotSlots = typeof __propDef.slots;
export default class GiBurningDot extends SvelteComponentTyped<GiBurningDotProps, GiBurningDotEvents, GiBurningDotSlots> {
}
export {};
