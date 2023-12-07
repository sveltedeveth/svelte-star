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
export type FaStackpathProps = typeof __propDef.props;
export type FaStackpathEvents = typeof __propDef.events;
export type FaStackpathSlots = typeof __propDef.slots;
export default class FaStackpath extends SvelteComponentTyped<FaStackpathProps, FaStackpathEvents, FaStackpathSlots> {
}
export {};
