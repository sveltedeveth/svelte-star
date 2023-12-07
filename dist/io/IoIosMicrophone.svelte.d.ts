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
export type IoIosMicrophoneProps = typeof __propDef.props;
export type IoIosMicrophoneEvents = typeof __propDef.events;
export type IoIosMicrophoneSlots = typeof __propDef.slots;
export default class IoIosMicrophone extends SvelteComponentTyped<IoIosMicrophoneProps, IoIosMicrophoneEvents, IoIosMicrophoneSlots> {
}
export {};
