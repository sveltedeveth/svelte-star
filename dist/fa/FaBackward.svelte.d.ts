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
export type FaBackwardProps = typeof __propDef.props;
export type FaBackwardEvents = typeof __propDef.events;
export type FaBackwardSlots = typeof __propDef.slots;
export default class FaBackward extends SvelteComponentTyped<FaBackwardProps, FaBackwardEvents, FaBackwardSlots> {
}
export {};
