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
export type IoIosAtProps = typeof __propDef.props;
export type IoIosAtEvents = typeof __propDef.events;
export type IoIosAtSlots = typeof __propDef.slots;
export default class IoIosAt extends SvelteComponentTyped<IoIosAtProps, IoIosAtEvents, IoIosAtSlots> {
}
export {};
