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
export type GiFishingHookProps = typeof __propDef.props;
export type GiFishingHookEvents = typeof __propDef.events;
export type GiFishingHookSlots = typeof __propDef.slots;
export default class GiFishingHook extends SvelteComponentTyped<GiFishingHookProps, GiFishingHookEvents, GiFishingHookSlots> {
}
export {};
