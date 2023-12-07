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
export type FaOmProps = typeof __propDef.props;
export type FaOmEvents = typeof __propDef.events;
export type FaOmSlots = typeof __propDef.slots;
export default class FaOm extends SvelteComponentTyped<FaOmProps, FaOmEvents, FaOmSlots> {
}
export {};
