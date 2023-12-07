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
export type FaConfluenceProps = typeof __propDef.props;
export type FaConfluenceEvents = typeof __propDef.events;
export type FaConfluenceSlots = typeof __propDef.slots;
export default class FaConfluence extends SvelteComponentTyped<FaConfluenceProps, FaConfluenceEvents, FaConfluenceSlots> {
}
export {};
