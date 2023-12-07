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
export type FaDiceProps = typeof __propDef.props;
export type FaDiceEvents = typeof __propDef.events;
export type FaDiceSlots = typeof __propDef.slots;
export default class FaDice extends SvelteComponentTyped<FaDiceProps, FaDiceEvents, FaDiceSlots> {
}
export {};
