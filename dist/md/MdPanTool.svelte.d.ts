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
export type MdPanToolProps = typeof __propDef.props;
export type MdPanToolEvents = typeof __propDef.events;
export type MdPanToolSlots = typeof __propDef.slots;
export default class MdPanTool extends SvelteComponentTyped<MdPanToolProps, MdPanToolEvents, MdPanToolSlots> {
}
export {};
