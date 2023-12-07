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
export type MdAssistantPhotoProps = typeof __propDef.props;
export type MdAssistantPhotoEvents = typeof __propDef.events;
export type MdAssistantPhotoSlots = typeof __propDef.slots;
export default class MdAssistantPhoto extends SvelteComponentTyped<MdAssistantPhotoProps, MdAssistantPhotoEvents, MdAssistantPhotoSlots> {
}
export {};
