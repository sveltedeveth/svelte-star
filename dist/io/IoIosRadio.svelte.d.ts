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
export type IoIosRadioProps = typeof __propDef.props;
export type IoIosRadioEvents = typeof __propDef.events;
export type IoIosRadioSlots = typeof __propDef.slots;
export default class IoIosRadio extends SvelteComponentTyped<IoIosRadioProps, IoIosRadioEvents, IoIosRadioSlots> {
}
export {};
