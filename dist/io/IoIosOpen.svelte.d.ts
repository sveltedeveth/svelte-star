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
export type IoIosOpenProps = typeof __propDef.props;
export type IoIosOpenEvents = typeof __propDef.events;
export type IoIosOpenSlots = typeof __propDef.slots;
export default class IoIosOpen extends SvelteComponentTyped<IoIosOpenProps, IoIosOpenEvents, IoIosOpenSlots> {
}
export {};
