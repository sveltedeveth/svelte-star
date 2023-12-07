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
export type MdSdCardProps = typeof __propDef.props;
export type MdSdCardEvents = typeof __propDef.events;
export type MdSdCardSlots = typeof __propDef.slots;
export default class MdSdCard extends SvelteComponentTyped<MdSdCardProps, MdSdCardEvents, MdSdCardSlots> {
}
export {};
