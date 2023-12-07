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
export type FaChromeProps = typeof __propDef.props;
export type FaChromeEvents = typeof __propDef.events;
export type FaChromeSlots = typeof __propDef.slots;
export default class FaChrome extends SvelteComponentTyped<FaChromeProps, FaChromeEvents, FaChromeSlots> {
}
export {};
