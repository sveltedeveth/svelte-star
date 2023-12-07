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
export type IoIosOutletProps = typeof __propDef.props;
export type IoIosOutletEvents = typeof __propDef.events;
export type IoIosOutletSlots = typeof __propDef.slots;
export default class IoIosOutlet extends SvelteComponentTyped<IoIosOutletProps, IoIosOutletEvents, IoIosOutletSlots> {
}
export {};
