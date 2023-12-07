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
export type MdDialpadProps = typeof __propDef.props;
export type MdDialpadEvents = typeof __propDef.events;
export type MdDialpadSlots = typeof __propDef.slots;
export default class MdDialpad extends SvelteComponentTyped<MdDialpadProps, MdDialpadEvents, MdDialpadSlots> {
}
export {};
