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
export type GiQuillProps = typeof __propDef.props;
export type GiQuillEvents = typeof __propDef.events;
export type GiQuillSlots = typeof __propDef.slots;
export default class GiQuill extends SvelteComponentTyped<GiQuillProps, GiQuillEvents, GiQuillSlots> {
}
export {};
