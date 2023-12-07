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
export type IoMdSearchProps = typeof __propDef.props;
export type IoMdSearchEvents = typeof __propDef.events;
export type IoMdSearchSlots = typeof __propDef.slots;
export default class IoMdSearch extends SvelteComponentTyped<IoMdSearchProps, IoMdSearchEvents, IoMdSearchSlots> {
}
export {};
