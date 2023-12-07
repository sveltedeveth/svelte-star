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
export type IoIosPersonProps = typeof __propDef.props;
export type IoIosPersonEvents = typeof __propDef.events;
export type IoIosPersonSlots = typeof __propDef.slots;
export default class IoIosPerson extends SvelteComponentTyped<IoIosPersonProps, IoIosPersonEvents, IoIosPersonSlots> {
}
export {};
