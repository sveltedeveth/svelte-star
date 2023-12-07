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
export type IoIosSwitchProps = typeof __propDef.props;
export type IoIosSwitchEvents = typeof __propDef.events;
export type IoIosSwitchSlots = typeof __propDef.slots;
export default class IoIosSwitch extends SvelteComponentTyped<IoIosSwitchProps, IoIosSwitchEvents, IoIosSwitchSlots> {
}
export {};
