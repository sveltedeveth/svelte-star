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
export type TiMicrophoneProps = typeof __propDef.props;
export type TiMicrophoneEvents = typeof __propDef.events;
export type TiMicrophoneSlots = typeof __propDef.slots;
export default class TiMicrophone extends SvelteComponentTyped<TiMicrophoneProps, TiMicrophoneEvents, TiMicrophoneSlots> {
}
export {};
