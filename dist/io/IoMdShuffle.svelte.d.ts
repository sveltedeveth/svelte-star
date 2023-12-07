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
export type IoMdShuffleProps = typeof __propDef.props;
export type IoMdShuffleEvents = typeof __propDef.events;
export type IoMdShuffleSlots = typeof __propDef.slots;
export default class IoMdShuffle extends SvelteComponentTyped<IoMdShuffleProps, IoMdShuffleEvents, IoMdShuffleSlots> {
}
export {};
