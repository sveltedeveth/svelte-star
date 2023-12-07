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
export type IoIosSwapProps = typeof __propDef.props;
export type IoIosSwapEvents = typeof __propDef.events;
export type IoIosSwapSlots = typeof __propDef.slots;
export default class IoIosSwap extends SvelteComponentTyped<IoIosSwapProps, IoIosSwapEvents, IoIosSwapSlots> {
}
export {};
