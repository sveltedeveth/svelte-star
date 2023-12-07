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
export type MdCloseProps = typeof __propDef.props;
export type MdCloseEvents = typeof __propDef.events;
export type MdCloseSlots = typeof __propDef.slots;
export default class MdClose extends SvelteComponentTyped<MdCloseProps, MdCloseEvents, MdCloseSlots> {
}
export {};
