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
export type IoIosFunnelProps = typeof __propDef.props;
export type IoIosFunnelEvents = typeof __propDef.events;
export type IoIosFunnelSlots = typeof __propDef.slots;
export default class IoIosFunnel extends SvelteComponentTyped<IoIosFunnelProps, IoIosFunnelEvents, IoIosFunnelSlots> {
}
export {};
