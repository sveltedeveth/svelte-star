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
export type MdViewListProps = typeof __propDef.props;
export type MdViewListEvents = typeof __propDef.events;
export type MdViewListSlots = typeof __propDef.slots;
export default class MdViewList extends SvelteComponentTyped<MdViewListProps, MdViewListEvents, MdViewListSlots> {
}
export {};
