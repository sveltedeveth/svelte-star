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
export type IoIosCameraProps = typeof __propDef.props;
export type IoIosCameraEvents = typeof __propDef.events;
export type IoIosCameraSlots = typeof __propDef.slots;
export default class IoIosCamera extends SvelteComponentTyped<IoIosCameraProps, IoIosCameraEvents, IoIosCameraSlots> {
}
export {};
