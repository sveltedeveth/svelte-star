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
export type MdSwapCallsProps = typeof __propDef.props;
export type MdSwapCallsEvents = typeof __propDef.events;
export type MdSwapCallsSlots = typeof __propDef.slots;
export default class MdSwapCalls extends SvelteComponentTyped<MdSwapCallsProps, MdSwapCallsEvents, MdSwapCallsSlots> {
}
export {};
