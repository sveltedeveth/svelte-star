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
export type FaNewspaperProps = typeof __propDef.props;
export type FaNewspaperEvents = typeof __propDef.events;
export type FaNewspaperSlots = typeof __propDef.slots;
export default class FaNewspaper extends SvelteComponentTyped<FaNewspaperProps, FaNewspaperEvents, FaNewspaperSlots> {
}
export {};
