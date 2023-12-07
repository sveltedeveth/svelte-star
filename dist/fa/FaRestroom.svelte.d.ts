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
export type FaRestroomProps = typeof __propDef.props;
export type FaRestroomEvents = typeof __propDef.events;
export type FaRestroomSlots = typeof __propDef.slots;
export default class FaRestroom extends SvelteComponentTyped<FaRestroomProps, FaRestroomEvents, FaRestroomSlots> {
}
export {};
