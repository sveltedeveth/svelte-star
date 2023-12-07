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
export type FaCcMastercardProps = typeof __propDef.props;
export type FaCcMastercardEvents = typeof __propDef.events;
export type FaCcMastercardSlots = typeof __propDef.slots;
export default class FaCcMastercard extends SvelteComponentTyped<FaCcMastercardProps, FaCcMastercardEvents, FaCcMastercardSlots> {
}
export {};
