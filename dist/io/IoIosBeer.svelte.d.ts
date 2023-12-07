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
export type IoIosBeerProps = typeof __propDef.props;
export type IoIosBeerEvents = typeof __propDef.events;
export type IoIosBeerSlots = typeof __propDef.slots;
export default class IoIosBeer extends SvelteComponentTyped<IoIosBeerProps, IoIosBeerEvents, IoIosBeerSlots> {
}
export {};
