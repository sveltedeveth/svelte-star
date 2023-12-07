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
export type FaListProps = typeof __propDef.props;
export type FaListEvents = typeof __propDef.events;
export type FaListSlots = typeof __propDef.slots;
export default class FaList extends SvelteComponentTyped<FaListProps, FaListEvents, FaListSlots> {
}
export {};
