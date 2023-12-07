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
export type IoIosBookProps = typeof __propDef.props;
export type IoIosBookEvents = typeof __propDef.events;
export type IoIosBookSlots = typeof __propDef.slots;
export default class IoIosBook extends SvelteComponentTyped<IoIosBookProps, IoIosBookEvents, IoIosBookSlots> {
}
export {};
