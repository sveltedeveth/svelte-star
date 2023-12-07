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
export type IoIosCheckboxProps = typeof __propDef.props;
export type IoIosCheckboxEvents = typeof __propDef.events;
export type IoIosCheckboxSlots = typeof __propDef.slots;
export default class IoIosCheckbox extends SvelteComponentTyped<IoIosCheckboxProps, IoIosCheckboxEvents, IoIosCheckboxSlots> {
}
export {};
