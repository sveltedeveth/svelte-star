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
export type FaWikipediaWProps = typeof __propDef.props;
export type FaWikipediaWEvents = typeof __propDef.events;
export type FaWikipediaWSlots = typeof __propDef.slots;
export default class FaWikipediaW extends SvelteComponentTyped<FaWikipediaWProps, FaWikipediaWEvents, FaWikipediaWSlots> {
}
export {};
