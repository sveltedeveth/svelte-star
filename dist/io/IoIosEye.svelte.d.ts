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
export type IoIosEyeProps = typeof __propDef.props;
export type IoIosEyeEvents = typeof __propDef.events;
export type IoIosEyeSlots = typeof __propDef.slots;
export default class IoIosEye extends SvelteComponentTyped<IoIosEyeProps, IoIosEyeEvents, IoIosEyeSlots> {
}
export {};
