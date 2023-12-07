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
export type IoIosOptionsProps = typeof __propDef.props;
export type IoIosOptionsEvents = typeof __propDef.events;
export type IoIosOptionsSlots = typeof __propDef.slots;
export default class IoIosOptions extends SvelteComponentTyped<IoIosOptionsProps, IoIosOptionsEvents, IoIosOptionsSlots> {
}
export {};
