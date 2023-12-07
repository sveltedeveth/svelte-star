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
export type IoIosRewindProps = typeof __propDef.props;
export type IoIosRewindEvents = typeof __propDef.events;
export type IoIosRewindSlots = typeof __propDef.slots;
export default class IoIosRewind extends SvelteComponentTyped<IoIosRewindProps, IoIosRewindEvents, IoIosRewindSlots> {
}
export {};
