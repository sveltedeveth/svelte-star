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
export type IoIosResizeProps = typeof __propDef.props;
export type IoIosResizeEvents = typeof __propDef.events;
export type IoIosResizeSlots = typeof __propDef.slots;
export default class IoIosResize extends SvelteComponentTyped<IoIosResizeProps, IoIosResizeEvents, IoIosResizeSlots> {
}
export {};
