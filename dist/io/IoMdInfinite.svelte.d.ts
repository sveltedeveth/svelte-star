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
export type IoMdInfiniteProps = typeof __propDef.props;
export type IoMdInfiniteEvents = typeof __propDef.events;
export type IoMdInfiniteSlots = typeof __propDef.slots;
export default class IoMdInfinite extends SvelteComponentTyped<IoMdInfiniteProps, IoMdInfiniteEvents, IoMdInfiniteSlots> {
}
export {};
