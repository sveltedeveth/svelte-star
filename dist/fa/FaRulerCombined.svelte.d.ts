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
export type FaRulerCombinedProps = typeof __propDef.props;
export type FaRulerCombinedEvents = typeof __propDef.events;
export type FaRulerCombinedSlots = typeof __propDef.slots;
export default class FaRulerCombined extends SvelteComponentTyped<FaRulerCombinedProps, FaRulerCombinedEvents, FaRulerCombinedSlots> {
}
export {};
