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
export type FaLessThanProps = typeof __propDef.props;
export type FaLessThanEvents = typeof __propDef.events;
export type FaLessThanSlots = typeof __propDef.slots;
export default class FaLessThan extends SvelteComponentTyped<FaLessThanProps, FaLessThanEvents, FaLessThanSlots> {
}
export {};
