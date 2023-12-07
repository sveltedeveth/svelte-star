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
export type FaTractorProps = typeof __propDef.props;
export type FaTractorEvents = typeof __propDef.events;
export type FaTractorSlots = typeof __propDef.slots;
export default class FaTractor extends SvelteComponentTyped<FaTractorProps, FaTractorEvents, FaTractorSlots> {
}
export {};
