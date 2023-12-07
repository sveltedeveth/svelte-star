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
export type IoIosPodiumProps = typeof __propDef.props;
export type IoIosPodiumEvents = typeof __propDef.events;
export type IoIosPodiumSlots = typeof __propDef.slots;
export default class IoIosPodium extends SvelteComponentTyped<IoIosPodiumProps, IoIosPodiumEvents, IoIosPodiumSlots> {
}
export {};
