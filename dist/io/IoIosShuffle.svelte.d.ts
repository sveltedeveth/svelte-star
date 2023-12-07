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
export type IoIosShuffleProps = typeof __propDef.props;
export type IoIosShuffleEvents = typeof __propDef.events;
export type IoIosShuffleSlots = typeof __propDef.slots;
export default class IoIosShuffle extends SvelteComponentTyped<IoIosShuffleProps, IoIosShuffleEvents, IoIosShuffleSlots> {
}
export {};
