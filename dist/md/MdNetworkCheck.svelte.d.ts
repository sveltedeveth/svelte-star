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
export type MdNetworkCheckProps = typeof __propDef.props;
export type MdNetworkCheckEvents = typeof __propDef.events;
export type MdNetworkCheckSlots = typeof __propDef.slots;
export default class MdNetworkCheck extends SvelteComponentTyped<MdNetworkCheckProps, MdNetworkCheckEvents, MdNetworkCheckSlots> {
}
export {};
