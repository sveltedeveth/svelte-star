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
export type IoIosBulbProps = typeof __propDef.props;
export type IoIosBulbEvents = typeof __propDef.events;
export type IoIosBulbSlots = typeof __propDef.slots;
export default class IoIosBulb extends SvelteComponentTyped<IoIosBulbProps, IoIosBulbEvents, IoIosBulbSlots> {
}
export {};
