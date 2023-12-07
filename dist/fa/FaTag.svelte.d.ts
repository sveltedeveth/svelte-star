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
export type FaTagProps = typeof __propDef.props;
export type FaTagEvents = typeof __propDef.events;
export type FaTagSlots = typeof __propDef.slots;
export default class FaTag extends SvelteComponentTyped<FaTagProps, FaTagEvents, FaTagSlots> {
}
export {};
