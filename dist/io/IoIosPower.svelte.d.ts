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
export type IoIosPowerProps = typeof __propDef.props;
export type IoIosPowerEvents = typeof __propDef.events;
export type IoIosPowerSlots = typeof __propDef.slots;
export default class IoIosPower extends SvelteComponentTyped<IoIosPowerProps, IoIosPowerEvents, IoIosPowerSlots> {
}
export {};
