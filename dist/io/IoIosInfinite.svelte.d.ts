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
export type IoIosInfiniteProps = typeof __propDef.props;
export type IoIosInfiniteEvents = typeof __propDef.events;
export type IoIosInfiniteSlots = typeof __propDef.slots;
export default class IoIosInfinite extends SvelteComponentTyped<IoIosInfiniteProps, IoIosInfiniteEvents, IoIosInfiniteSlots> {
}
export {};
