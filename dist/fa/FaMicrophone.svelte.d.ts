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
export type FaMicrophoneProps = typeof __propDef.props;
export type FaMicrophoneEvents = typeof __propDef.events;
export type FaMicrophoneSlots = typeof __propDef.slots;
export default class FaMicrophone extends SvelteComponentTyped<FaMicrophoneProps, FaMicrophoneEvents, FaMicrophoneSlots> {
}
export {};
