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
export type FaDogProps = typeof __propDef.props;
export type FaDogEvents = typeof __propDef.events;
export type FaDogSlots = typeof __propDef.slots;
export default class FaDog extends SvelteComponentTyped<FaDogProps, FaDogEvents, FaDogSlots> {
}
export {};
