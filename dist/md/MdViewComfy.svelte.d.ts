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
export type MdViewComfyProps = typeof __propDef.props;
export type MdViewComfyEvents = typeof __propDef.events;
export type MdViewComfySlots = typeof __propDef.slots;
export default class MdViewComfy extends SvelteComponentTyped<MdViewComfyProps, MdViewComfyEvents, MdViewComfySlots> {
}
export {};
