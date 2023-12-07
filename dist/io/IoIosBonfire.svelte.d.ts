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
export type IoIosBonfireProps = typeof __propDef.props;
export type IoIosBonfireEvents = typeof __propDef.events;
export type IoIosBonfireSlots = typeof __propDef.slots;
export default class IoIosBonfire extends SvelteComponentTyped<IoIosBonfireProps, IoIosBonfireEvents, IoIosBonfireSlots> {
}
export {};
