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
export type MdChromeReaderModeProps = typeof __propDef.props;
export type MdChromeReaderModeEvents = typeof __propDef.events;
export type MdChromeReaderModeSlots = typeof __propDef.slots;
export default class MdChromeReaderMode extends SvelteComponentTyped<MdChromeReaderModeProps, MdChromeReaderModeEvents, MdChromeReaderModeSlots> {
}
export {};
