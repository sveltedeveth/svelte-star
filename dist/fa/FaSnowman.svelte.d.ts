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
export type FaSnowmanProps = typeof __propDef.props;
export type FaSnowmanEvents = typeof __propDef.events;
export type FaSnowmanSlots = typeof __propDef.slots;
export default class FaSnowman extends SvelteComponentTyped<FaSnowmanProps, FaSnowmanEvents, FaSnowmanSlots> {
}
export {};
