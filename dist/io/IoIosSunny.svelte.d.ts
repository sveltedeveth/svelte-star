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
export type IoIosSunnyProps = typeof __propDef.props;
export type IoIosSunnyEvents = typeof __propDef.events;
export type IoIosSunnySlots = typeof __propDef.slots;
export default class IoIosSunny extends SvelteComponentTyped<IoIosSunnyProps, IoIosSunnyEvents, IoIosSunnySlots> {
}
export {};
