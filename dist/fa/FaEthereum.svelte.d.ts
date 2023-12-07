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
export type FaEthereumProps = typeof __propDef.props;
export type FaEthereumEvents = typeof __propDef.events;
export type FaEthereumSlots = typeof __propDef.slots;
export default class FaEthereum extends SvelteComponentTyped<FaEthereumProps, FaEthereumEvents, FaEthereumSlots> {
}
export {};
