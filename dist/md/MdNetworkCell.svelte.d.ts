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
export type MdNetworkCellProps = typeof __propDef.props;
export type MdNetworkCellEvents = typeof __propDef.events;
export type MdNetworkCellSlots = typeof __propDef.slots;
export default class MdNetworkCell extends SvelteComponentTyped<MdNetworkCellProps, MdNetworkCellEvents, MdNetworkCellSlots> {
}
export {};
