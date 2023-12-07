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
export type MdPauseProps = typeof __propDef.props;
export type MdPauseEvents = typeof __propDef.events;
export type MdPauseSlots = typeof __propDef.slots;
export default class MdPause extends SvelteComponentTyped<MdPauseProps, MdPauseEvents, MdPauseSlots> {
}
export {};
