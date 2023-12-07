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
export type IoIosMegaphoneProps = typeof __propDef.props;
export type IoIosMegaphoneEvents = typeof __propDef.events;
export type IoIosMegaphoneSlots = typeof __propDef.slots;
export default class IoIosMegaphone extends SvelteComponentTyped<IoIosMegaphoneProps, IoIosMegaphoneEvents, IoIosMegaphoneSlots> {
}
export {};
