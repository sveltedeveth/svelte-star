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
export type IoIosFlagProps = typeof __propDef.props;
export type IoIosFlagEvents = typeof __propDef.events;
export type IoIosFlagSlots = typeof __propDef.slots;
export default class IoIosFlag extends SvelteComponentTyped<IoIosFlagProps, IoIosFlagEvents, IoIosFlagSlots> {
}
export {};
