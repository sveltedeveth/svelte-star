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
export type FaThListProps = typeof __propDef.props;
export type FaThListEvents = typeof __propDef.events;
export type FaThListSlots = typeof __propDef.slots;
export default class FaThList extends SvelteComponentTyped<FaThListProps, FaThListEvents, FaThListSlots> {
}
export {};
