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
export type MdShuffleProps = typeof __propDef.props;
export type MdShuffleEvents = typeof __propDef.events;
export type MdShuffleSlots = typeof __propDef.slots;
export default class MdShuffle extends SvelteComponentTyped<MdShuffleProps, MdShuffleEvents, MdShuffleSlots> {
}
export {};
