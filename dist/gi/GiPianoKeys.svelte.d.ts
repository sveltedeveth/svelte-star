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
export type GiPianoKeysProps = typeof __propDef.props;
export type GiPianoKeysEvents = typeof __propDef.events;
export type GiPianoKeysSlots = typeof __propDef.slots;
export default class GiPianoKeys extends SvelteComponentTyped<GiPianoKeysProps, GiPianoKeysEvents, GiPianoKeysSlots> {
}
export {};
