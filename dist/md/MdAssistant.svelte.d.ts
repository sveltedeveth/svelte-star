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
export type MdAssistantProps = typeof __propDef.props;
export type MdAssistantEvents = typeof __propDef.events;
export type MdAssistantSlots = typeof __propDef.slots;
export default class MdAssistant extends SvelteComponentTyped<MdAssistantProps, MdAssistantEvents, MdAssistantSlots> {
}
export {};
