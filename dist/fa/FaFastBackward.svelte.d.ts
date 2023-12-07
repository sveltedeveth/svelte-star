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
export type FaFastBackwardProps = typeof __propDef.props;
export type FaFastBackwardEvents = typeof __propDef.events;
export type FaFastBackwardSlots = typeof __propDef.slots;
export default class FaFastBackward extends SvelteComponentTyped<FaFastBackwardProps, FaFastBackwardEvents, FaFastBackwardSlots> {
}
export {};
