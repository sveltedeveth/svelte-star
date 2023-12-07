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
export type TiMediaFastForwardProps = typeof __propDef.props;
export type TiMediaFastForwardEvents = typeof __propDef.events;
export type TiMediaFastForwardSlots = typeof __propDef.slots;
export default class TiMediaFastForward extends SvelteComponentTyped<TiMediaFastForwardProps, TiMediaFastForwardEvents, TiMediaFastForwardSlots> {
}
export {};
