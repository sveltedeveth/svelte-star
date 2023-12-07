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
export type FaGreaterThanProps = typeof __propDef.props;
export type FaGreaterThanEvents = typeof __propDef.events;
export type FaGreaterThanSlots = typeof __propDef.slots;
export default class FaGreaterThan extends SvelteComponentTyped<FaGreaterThanProps, FaGreaterThanEvents, FaGreaterThanSlots> {
}
export {};
