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
export type FaCompressProps = typeof __propDef.props;
export type FaCompressEvents = typeof __propDef.events;
export type FaCompressSlots = typeof __propDef.slots;
export default class FaCompress extends SvelteComponentTyped<FaCompressProps, FaCompressEvents, FaCompressSlots> {
}
export {};
