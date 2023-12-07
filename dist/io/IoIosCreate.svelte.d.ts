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
export type IoIosCreateProps = typeof __propDef.props;
export type IoIosCreateEvents = typeof __propDef.events;
export type IoIosCreateSlots = typeof __propDef.slots;
export default class IoIosCreate extends SvelteComponentTyped<IoIosCreateProps, IoIosCreateEvents, IoIosCreateSlots> {
}
export {};
