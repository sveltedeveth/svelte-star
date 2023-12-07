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
export type FaTagsProps = typeof __propDef.props;
export type FaTagsEvents = typeof __propDef.events;
export type FaTagsSlots = typeof __propDef.slots;
export default class FaTags extends SvelteComponentTyped<FaTagsProps, FaTagsEvents, FaTagsSlots> {
}
export {};
