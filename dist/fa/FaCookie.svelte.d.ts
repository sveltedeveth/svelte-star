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
export type FaCookieProps = typeof __propDef.props;
export type FaCookieEvents = typeof __propDef.events;
export type FaCookieSlots = typeof __propDef.slots;
export default class FaCookie extends SvelteComponentTyped<FaCookieProps, FaCookieEvents, FaCookieSlots> {
}
export {};
