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
export type FaSleighProps = typeof __propDef.props;
export type FaSleighEvents = typeof __propDef.events;
export type FaSleighSlots = typeof __propDef.slots;
export default class FaSleigh extends SvelteComponentTyped<FaSleighProps, FaSleighEvents, FaSleighSlots> {
}
export {};
