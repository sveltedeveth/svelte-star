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
export type IoIosBusinessProps = typeof __propDef.props;
export type IoIosBusinessEvents = typeof __propDef.events;
export type IoIosBusinessSlots = typeof __propDef.slots;
export default class IoIosBusiness extends SvelteComponentTyped<IoIosBusinessProps, IoIosBusinessEvents, IoIosBusinessSlots> {
}
export {};
