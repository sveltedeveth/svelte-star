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
export type FaSearchProps = typeof __propDef.props;
export type FaSearchEvents = typeof __propDef.events;
export type FaSearchSlots = typeof __propDef.slots;
export default class FaSearch extends SvelteComponentTyped<FaSearchProps, FaSearchEvents, FaSearchSlots> {
}
export {};
