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
export type FaSignalProps = typeof __propDef.props;
export type FaSignalEvents = typeof __propDef.events;
export type FaSignalSlots = typeof __propDef.slots;
export default class FaSignal extends SvelteComponentTyped<FaSignalProps, FaSignalEvents, FaSignalSlots> {
}
export {};
