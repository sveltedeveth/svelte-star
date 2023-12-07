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
export type FaRegNewspaperProps = typeof __propDef.props;
export type FaRegNewspaperEvents = typeof __propDef.events;
export type FaRegNewspaperSlots = typeof __propDef.slots;
export default class FaRegNewspaper extends SvelteComponentTyped<FaRegNewspaperProps, FaRegNewspaperEvents, FaRegNewspaperSlots> {
}
export {};
