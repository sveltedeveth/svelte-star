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
export type MdSearchProps = typeof __propDef.props;
export type MdSearchEvents = typeof __propDef.events;
export type MdSearchSlots = typeof __propDef.slots;
export default class MdSearch extends SvelteComponentTyped<MdSearchProps, MdSearchEvents, MdSearchSlots> {
}
export {};
