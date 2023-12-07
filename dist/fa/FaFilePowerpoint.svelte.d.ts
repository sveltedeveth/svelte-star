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
export type FaFilePowerpointProps = typeof __propDef.props;
export type FaFilePowerpointEvents = typeof __propDef.events;
export type FaFilePowerpointSlots = typeof __propDef.slots;
export default class FaFilePowerpoint extends SvelteComponentTyped<FaFilePowerpointProps, FaFilePowerpointEvents, FaFilePowerpointSlots> {
}
export {};
