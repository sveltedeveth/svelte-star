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
export type MdThumbUpProps = typeof __propDef.props;
export type MdThumbUpEvents = typeof __propDef.events;
export type MdThumbUpSlots = typeof __propDef.slots;
export default class MdThumbUp extends SvelteComponentTyped<MdThumbUpProps, MdThumbUpEvents, MdThumbUpSlots> {
}
export {};
