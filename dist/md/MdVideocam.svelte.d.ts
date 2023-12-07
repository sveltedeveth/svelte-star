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
export type MdVideocamProps = typeof __propDef.props;
export type MdVideocamEvents = typeof __propDef.events;
export type MdVideocamSlots = typeof __propDef.slots;
export default class MdVideocam extends SvelteComponentTyped<MdVideocamProps, MdVideocamEvents, MdVideocamSlots> {
}
export {};
