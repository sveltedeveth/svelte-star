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
export type MdSwitchVideoProps = typeof __propDef.props;
export type MdSwitchVideoEvents = typeof __propDef.events;
export type MdSwitchVideoSlots = typeof __propDef.slots;
export default class MdSwitchVideo extends SvelteComponentTyped<MdSwitchVideoProps, MdSwitchVideoEvents, MdSwitchVideoSlots> {
}
export {};
