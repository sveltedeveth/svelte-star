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
export type MdPresentToAllProps = typeof __propDef.props;
export type MdPresentToAllEvents = typeof __propDef.events;
export type MdPresentToAllSlots = typeof __propDef.slots;
export default class MdPresentToAll extends SvelteComponentTyped<MdPresentToAllProps, MdPresentToAllEvents, MdPresentToAllSlots> {
}
export {};
