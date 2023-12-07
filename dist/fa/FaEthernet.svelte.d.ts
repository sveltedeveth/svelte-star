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
export type FaEthernetProps = typeof __propDef.props;
export type FaEthernetEvents = typeof __propDef.events;
export type FaEthernetSlots = typeof __propDef.slots;
export default class FaEthernet extends SvelteComponentTyped<FaEthernetProps, FaEthernetEvents, FaEthernetSlots> {
}
export {};
